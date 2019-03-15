<template>
  <div class="_constant">
    <div class="_constant_content_left">
      <p>常量类型</p>
      <el-tree :data="constTypeTree"
               :props="defaultProps"
               node-key="id"
               :default-expanded-keys="[]"
               :highlight-current="true"
               ref="tree"
               accordion
               @node-click="treeNodeClick"></el-tree>
    </div>
    <div class="_constant_content_right">
      <p>常量选项</p>
      <el-row class="toolbar"
              style="padding-bottom: 0px;">
        <el-col :span="24">
          <el-form :inline="true"
                   :model="filters">
            <el-form-item>
              <el-button type="primary"
                         @click="refresh">刷新</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="openConstAddDialog()">新增</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-table ref="constTable"
                :data="getTableData()"
                style="width: 100%"
                :default-sort="{prop: 'Id', order: 'descending'}">
        <el-table-column type="index"
                         label="ID"
                         width="120"
                         :index="computeIndexMethod"></el-table-column>
        <el-table-column property="Name"
                         label="名称"
                         width="120"></el-table-column>
        <el-table-column property="Id"
                         label=""
                         sortable=true
                         v-if=false></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small"
                       icon="el-icon-edit"
                       @click="openConstEditDialog(scope.$index, scope.row)"></el-button>
            <el-button type="danger"
                       size="small"
                       icon="el-icon-delete"
                       @click="deleteConst(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 15, 20]"
                     :page-size="pagesize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total='constValue.length'>
      </el-pagination>
    </div>
    <!-- 新增/编辑页面 -->
    <div :class="dialogVisible > 0 ? '_Add_roles _Add_roles_False' : '_Add_roles'">
      <div class="_Add_roles_div">
        <div class="_Add_roles_header">
          <p>{{ dialogOp }}</p>
          <button type="button"
                  aria-label="Close"
                  class="dialog__headerbtn"
                  @click="closeDialog()"><i class="el-dialog__close el-icon el-icon-close"></i></button>
        </div>
        <div class="_Add_roles_section">
          <el-form :model="constForm"
                   ref="constForm">
            <el-form-item label="主键"
                          prop="Id"
                          required
                          v-if="false">
              <el-input auto-complete="off"
                        v-model="constForm.Id"
                        required></el-input>
            </el-form-item>
            <el-form-item label="名称"
                          prop="Name"
                          required>
              <el-input auto-complete="off"
                        v-model="constForm.Name"
                        required></el-input>
            </el-form-item>
            <el-form-item label="上级"
                          prop="ParentId">
              <el-select v-model="constForm.ParentId"
                         clearable
                         :disabled="dialogVisible != 1"
                         placeholder="请选择">
                <el-option v-for="item in constTypeTree.filter(ctt => ctt.Id === currentConstTypeId)"
                           :key="item.Id"
                           :label="item.Name"
                           :value="item.Id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="_Add_roles_footer">
          <el-button type="success"
                     @click.native="opConst">确认</el-button>
          <el-button type="danger"
                     @click="closeDialog()">关闭</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      defaultProps: {
        id: 'Id',
        children: 'children',
        label: 'Name'
      },
      filters: {
        name: ''
      },
      currentPage: 1, //初始页
      pagesize: 5,

      constTypeTree: [],  // 常量类型树结构
      constValueMap: new Map(), // 常量值Map,常量类型做key
      constValue: [],
      currentConstTypeId: -1,

      // 常量实体
      constForm: {
        "Id": -1,
        "Name": null,
        "ParentId": ""
      },
      dialogVisible: 0, // 0 主页面， 1 新增， 2 编辑
      dialogOp: "新增常量"
    }
  },
  methods: {
    // 常量选项表数据设置
    getTableData () {
      if (this.constValue == null)
        return null
      length = this.constValue.length
      if (length / this.pagesize + (length % this.pagesize === 0 ? 0 : 1) < this.currentPage)
        this.currentPage -= 1
      return this.constValue.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    },
    // 加载常量类型
    locadConstType () {
      this.loadConst(-1, this.orgConstType)
    },
    // 加载常量选项
    locadConstValue (parentId) {
      this.loadConst(parentId, this.orgConstValue)
    },
    // 加载常量
    loadConst (parentId, orgCallBack) {
      this.$api.consts.getConstByParentId(parentId).then(ret => {
        orgCallBack(parentId, ret.data.Obj)
      })
    },
    // 常量类型处理
    orgConstType (parentId, constTypes) {
      if (constTypes == null || constTypes == undefined || constTypes.length <= 0)
        return
      let index = 0
      this.currentConstTypeId = constTypes[0].Id
      constTypes.forEach(ele => {
        if (ele.ParentId === -1) {
          this.constTypeTree.push(this.treeNode(ele.Name, ele.Id, ++index))
        }
      });

      // 加载第一行
      this.locadConstValue(this.currentConstTypeId)
    },
    // 常量选项处理
    orgConstValue (parentId, constValues) {
      if (parentId === undefined)
        return
      let tmp = this.constValueMap.get(parentId)
      if (tmp == null || tmp == undefined)
        this.constValueMap.set(parentId, constValues)
      else
        this.constValueMap.set(parentId, this.constValueMap.get(parentId).concat(constValues))

      this.setTableData(parentId)
    },
    // 常量类型树节点
    treeNode (label, id, index) {
      return {
        Id: id,
        Name: id == undefined ? label : label + "(" + id + ")",
        ParentId: -1,
        children: []
      }
    },
    treeNodeClick (data) {
      if (this.constValueMap == undefined || this.constValueMap == null
        || this.constValueMap.get(data.Id) == null || this.constValueMap.get(data.Id) == undefined)
        this.locadConstValue(data.Id)
      else
        this.setTableData(data.Id)
    },
    // 设置表格数据
    setTableData (parentId) {
      // console.log("setTableData " + parentId)
      // console.log(this.constValueMap.get(parentId))
      this.currentPage = 1
      this.pagesize = 5
      this.currentConstTypeId = parentId
      this.$refs.constTable.sort()
      this.constValue = this.constValueMap.get(parentId)
      this.$refs.tree.setCurrentKey(parentId)
    },
    // 打开常量添加对话框
    openConstAddDialog () {
      this.constForm = {
        "Name": "",
        "ParentId": "",
        "Id": 0
      }
      this.dialogOp = "新增常量"
      this.dialogVisible = 1
    },
    // 打开常量编辑对话框
    openConstEditDialog (index, row) {
      // console.log(row)
      this.constForm = {
        "Name": row.Name,
        "ParentId": row.ParentId,
        "Id": row.Id
      }
      this.dialogVisible = 2
      this.dialogOp = "编辑常量"
    },
    // 关闭对话框
    closeDialog () {
      this.dialogVisible = 0
    },
    // 根据当前需要打开对应的对话框
    opConst (row) {
      switch (this.dialogVisible) {
        case 1:
          this.addConst()
          break
        case 2:
          this.editConst(row)
          break
      }
    },
    // 添加常量逻辑代码
    addConst () {
      // console.log("parentId : " + this.constForm.ParentId)
      let parentId = this.constForm.ParentId == "" ? -1 : this.constForm.ParentId;
      let name = this.constForm.Name
      // console.log(parentId)
      this.$confirm('确认提交吗？', '提交', {}).then(() => {
        this.$api.consts.saveConst(parentId, name).then(res => {
          if (res.data.Code != 0)
            return
          let ret = res.data.Obj
          if (this.constValue == null || this.constValue == undefined)
            this.constValue = []
          if (parentId != -1) {
            if (this.currentConstTypeId == parentId)
              this.constValue.unshift(ret)
            else {
              if (this.constValueMap.get(parentId) == null
                || this.constValueMap.get(parentId) == undefined) {
                this.locadConstValue(parentId)
              } else {
                this.constValueMap.get(parentId).unshift(ret)
                this.setTableData(parentId)
              }
            }
          } else
            this.constTypeTree.push(this.treeNode(ret.Name, ret.Id))
          this.closeDialog()
        })
      })
    },
    // 编辑常量多机代码
    editConst () {
      let id = this.constForm.Id
      let parentId = this.constForm.ParentId
      let name = this.constForm.Name
      this.$refs.constForm.validate((valid) => {
        if (!valid)
          return
        this.$confirm('确认提交吗？', '提示', {}).then(() => {
          this.$api.consts.editConst(id, parentId, name).then(res => {
            if (res.data.Code != 0)
              return
            this.constValueMap.set(parentId, this.constValue.map(x => x.Id == id ? res.data.Obj : x))
            this.constValue = this.constValueMap.get(parentId)

            this.closeDialog()
          })
        });

      });
    },
    // 删除常量逻辑代码
    deleteConst: function (index, row) {
      // console.log(row.Id)
      this.$confirm('确认删除该记录吗？', '提示', { type: 'warning' })
        .then(() => {
          this.$api.consts.deleteConst(row.Id).then(res => {
            if (res.data.Code != 0)
              return
            this.constValueMap.set(row.ParentId, this.constValue.filter(x => x.Id != row.Id))
            this.constValue = this.constValueMap.get(row.ParentId)
          })
        })
    },
    // 常量选项列表索引计算
    computeIndexMethod (index) {
      return (this.currentPage - 1) * this.pagesize + index + 1;
    },
    handleSizeChange (val) {
      this.pagesize = val;
    },
    handleCurrentChange (val) {
      this.currentPage = val;
    },
    // 刷新
    refresh: function () {
      this.constTypeTree = []
      this.constValueMap.clear()
      this.locadConstType()
    },
  },
  created () {
    this.locadConstType();
  }
}
</script>
<style scoped>
._constant {
  display: flex;
}
._constant_content_left {
  width: 15%;
  height: 470px;
  overflow-y: no-display;
  overflow-x: hidden;
  /* background-color: #fff; */
  margin-right: 10px;
}

._constant_content_left {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

._constant_content_left > p,
._constant_content_right > p {
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  padding-left: 10px;
}

._constant_content_right {
  width: 85%;
  height: 100%;
}

._constant_content_right,
._constant_content_left {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
._constant_content_right .toolbar form {
  text-align: right;
}
.el-pagination {
  text-align: center;
  margin-top: 15px;
}

._Add_roles {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

._Add_roles_False {
  display: block;
}

._Add_roles ._Add_roles_div {
  width: 60%;
  margin: 4% auto;
  background-color: #fff;
}

._Add_roles_header {
  height: 40px;
  background-color: rgb(112, 112, 228);
  display: flex;
  justify-content: space-between;
}

._Add_roles_header p {
  line-height: 24px;
  font-size: 18px;
  margin-left: 20px;
  line-height: 40px;
  color: #fff;
}

._Add_roles_header .dialog__headerbtn {
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

._Add_roles_div ._Add_roles_section {
  padding: 5% 10% 0 10%;
}
._Add_roles_div ._Add_roles_section /deep/ .el-form-item__label {
  width: 120px;
}
._Add_roles_div ._Add_roles_section form .el-input,
._Add_roles_div ._Add_roles_section form .el-textarea {
  width: 75%;
}

._Add_roles_div ._Add_roles_footer {
  padding: 10px 3% 0 0;
  text-align: right;
  border-top: 1px solid #999;
  background-color: #ccc;
}
</style>
