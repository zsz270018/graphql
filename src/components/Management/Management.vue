<template>
    <div class="bar">
      <el-row class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" class="bar_form">
          <div class="bar_form_left">
            <el-form-item>
              <el-input v-model="searchForm.filter" placeholder="请输入名称查询"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="srarch">查询</el-button>
            </el-form-item>
          </div>
          <div class="bar_form_right">
            <el-form-item style="float:right">
              <el-button-group>
                <el-button type="primary" @click="addFormVisible = true">+新增</el-button>
              </el-button-group>
            </el-form-item>
          </div>
        </el-form>
      </el-row>
        <el-table :data="tableData" style="100%">
          <el-table-column type="index" label="序号" :index="roleIndexMethod"></el-table-column>
          <el-table-column prop="Name" label="名称"></el-table-column>
          <el-table-column prop="Descript" label="备注"></el-table-column>
          <el-table-column prop="CreateTime" label="创建时间" :formatter="formatter"></el-table-column>
          <el-table-column fixed="right" label="操作" width="140">
            <template slot-scope="scope">
              <el-button size="small" icon="el-icon-edit" @click="EditData(scope.$index, scope.row)"></el-button>
              <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteData(scope.$index, scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
         <el-pagination @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total='totalItems'>
        </el-pagination>
        <!-- 新增内容 -->
        <el-dialog title="新增" v-if="addFormVisible" :visible.sync="addFormVisible" width="50%" :before-close="handleClose">
          <div class="dialog-body">
            <div class="Management_form">
              <el-form :model="addForm" label-width="120px" ref="addForm">
                <el-form-item label="名称" prop="Name" :rules="[{ required: true, message: '名称不能为空'}]">
                  <el-input v-model="addForm.Name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="Descript" :rules="[{ required: true, message: '备注不能为空'}]">
                  <el-input v-model="addForm.Descript" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="handleClose">取消</el-button>
              <el-button type="primary" @click.native="addSubmit('addForm')">提交</el-button>
            </div>
          </div>
        </el-dialog>
        <!-- 编辑内容 -->
        <el-dialog title="编辑" v-if="editFormVisible" :visible.sync="editFormVisible" width="50%" :before-close="editClose">
          <div class="dialog-body">
            <div class="Management_form">
              <el-form :model="editForm" label-width="120px" ref="editForm">
                <el-form-item label="名称" prop="Name" :rules="[{ required: true, message: '名称不能为空'}]">
                  <el-input v-model="editForm.Name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="Descript" :rules="[{ required: true, message: '备注不能为空'}]">
                  <el-input v-model="editForm.Descript" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button @click.native="editClose">取消</el-button>
              <el-button type="primary" @click.native="editSubmit('editForm')">提交</el-button>
            </div>
          </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data(){
    return {
      tableData: [], //表格数据
      totalItems: 0, //列表条数
      currentPage: 1, //初始页
      pageSize: 5, //页数大小
      //列表查询条件
      searchForm: {
        filter:""
      },
      addFormVisible: false,//新增界面是否显示
      //新增服务的表单
      addForm: {
        ParentId:2,
        Name: "",
        Descript: ""
      },
      editFormVisible: false,//编辑界面是否显示
      editForm: {
        name:"",
        descript:""
      }
    }
  },
  computed: {
    // ordert(){
    //   return this.tableData.slice(
    //     (this.currentPage - 1) * this.pageSize,
    //     this.currentPage * this.pageSize
    //   )
    // }
  },
  mounted(){
    this.getListnumber()
    // this.getListData()
  },
  methods: {
    //序号
    roleIndexMethod(index) {
      return (this.currentPage - 1) * this.pageSize + index + 1;
    },
    //时间格式化
    formatter(row, column) {
      var time = row.CreateTime;
      var dateee = new Date(time).toJSON();
      var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      return times;
    },
    //分页
    //handleSizeChange 列表一页的数量进行改变
    handleSizeChange(val){
      this.pageSize = val;
      this.getListnumber()
    },
    //handleCurrentChange 列表页数进行改变
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getListnumber()
    },
    //列表数量
    getListnumber(){
      const parentId = 2
      this.$http.get(`/api/v1/goodscategory/count?parentId=${parentId}`)
      .then(res =>{
        console.log(res)
        this.totalItems = res.data.Obj
        this.getListData()
      })
    },
    //列表信息
    getListData(){
      const parentId = 2
      this.$http.get(`/api/v1/goodscategory/page?page=${this.currentPage}&row=${this.pageSize}&parentId=${parentId}`)
      .then(res=>{
        console.log(res)
        this.tableData = res.data.Obj || [];
        // console.log(this.tableData)
        // this.totalItems = this.tableData.length
      })
    },
    //查询
    srarch(){
      const parentId = 2;
      const filter = this.searchForm.filter
      this.$http.get(`/api/v1/goodscategory/page?page=${this.currentPage}&row=${this.pageSize}&parentId=${parentId}&filter=${filter}`)
      .then(res=>{
        console.log(res)
        this.tableData = res.data.Obj || []
      })
    },
    //新增界面显示
    handleClose(){
      this.addFormVisible = false;
      this.addForm = {
        Name: "",
        Descript: "",
      }
    },
    addSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          this.$http.post(`/api/v1/goodscategory`,this.addForm)
          .then(res=>{
            console.log(res)
            this.handleClose()
            this.getListnumber()
            // this.getListData()
            // this.tableData.unshift(res.data.Obj)
            // this.totalItems++
          })
        }else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    //编辑界面显示
    EditData(index,row){
      this.editFormVisible = true;
      this.editForm = Object.assign({},row)
    },
    editClose(){
      this.editFormVisible = false;
      this.editForm = {
        Id:'',
        Name:"",
        Descript:""
      }
    },
    editSubmit: function(formName){
      this.$refs[formName].validate((valid) => {
        const Id = this.editForm.Id
        const Name = this.editForm.Name
        const Descript = this.editForm.Descript
        if(valid) {
          this.$confirm('确认提交吗','提示',{}).then(()=>{
             this.$http.patch(`/api/v1/goodscategory?id=${Id}&name=${Name}&descript=${Descript}`,this.editForm)
             .then(res=>{
               console.log(res)
               this.editClose();
               this.getListnumber()
             })
          })
        }
      })
    },
    //删除
    /**
     * index 列表的index
     * row 列表的每一数据
     */
    deleteData:function(index,row){
      this.$confirm("确认删除该记录吗？","提示",{
        type:"warning"
      }).then(() =>{
        this.$http.delete("/api/v1/goodscategory?id=" + row.Id,row)
        .then(res => {
           this.getListnumber()
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-body {
  .dialog-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
}
.bar_form {
  display: flex;
  justify-content: space-between;
}
</style>
