<template>
  <section data-v-51a2c380 class="content-container">
    <el-row class="toolbar" style="padding-bottom: 0px;">
      <el-col :span="24">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="searchForm.companyName" placeholder="请输入名称" style="width:220px;font-size:12px;"></el-input>
            <el-input v-model="searchForm.phone" placeholder="请输入手机号" style="width:220px;font-size:12px;"></el-input>
            <el-select v-model="searchForm.state" placeholder="全部状态" style="width:130px;">
              <el-option style="height:45px;" v-for="item in stateSelectOpption" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="srarch">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">+新增机构</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table style="width: 100%" :data="tableList" @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->
      <el-table-column label="机构名称" prop="Name"></el-table-column>
      <el-table-column label="机构类型" prop="Type">
        <template slot-scope="scope">
          <span> {{ typeFilter(scope.row.Type) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="负责人" prop="ResponsiblePersonName"></el-table-column>
      <el-table-column label="性别" prop="ResponsiblePersonSex">
        <template slot-scope="scope">
          <span> {{ scope.row.ResponsiblePersonSex == 0 ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" prop="ResponsiblePersonPhone"></el-table-column>
      <el-table-column label="单位地址" prop="ResponsiblePersonPhone"></el-table-column>
      <el-table-column label="单位人数" prop="StaffCnt"></el-table-column>
      <el-table-column label="营业执照">
        <template slot-scope="scope">
          <img :src="scope.row.BusinessLicenseImg" style="width:50px;height:50px"  />
          <!-- @click="imgBtn(scope.row.BusinessLicenseImg)" -->
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="State">
        <template slot-scope="scope">
          <span> {{ stateFilter(scope.row.State) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="CreateTime" :formatter='formatter'>
        <!-- <template slot-scope="scope">
          <span> {{ dateFormat( scope.row.CreateTime ) }}</span>
        </template> -->
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDel(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalItems">
    </el-pagination>

    <!-- 编辑页面 -->
    <el-dialog title="编辑" v-if="editFormVisible" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="120px" ref="editForm">
        <el-form-item label="机构名称" prop="Name" :rules="[{ required: true, message: '机构名称不能为空'}]">
          <el-input v-model="editForm.Name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构类型" prop="Type" :rules="[{ required: true, message: '请选择机构类型'}]">
          <el-select v-model="editForm.Type" style="width:100%" placeholder="请选择">
            <el-option v-for="item in typeOpption" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人" prop="ResponsiblePersonName" :rules="[{ required: true, message: '负责人不能为空'}]">
          <el-input v-model="editForm.ResponsiblePersonName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="ResponsiblePersonSex">
          <el-radio-group v-model="editForm.ResponsiblePersonSex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="联系电话" prop="ResponsiblePersonPhone" :rules="[{ required: true, message: '联系电话不能为空'}]">
          <el-input v-model="editForm.ResponsiblePersonPhone" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="单位地址" prop="Address" :rules="[{ required: true, message: '单位地址不能为空'}]">
          <el-input v-model="editForm.Address" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="单位人数" prop="StaffCnt" :rules="[{ required: true, message: '单位人数不能为空'}]">
          <el-input v-model="editForm.StaffCnt" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="State" :rules="[{ required: true, message: '请选择状态'}]">
          <el-select v-model="editForm.State" style="width:100%" placeholder="请选择">
            <el-option v-for="item in stateSelectOpption" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到期时间" :rules="[{ required: true, message: '请选择到期时间'}]">
          <el-date-picker v-model="editForm.Expired" type="date" placeholder="选择日期" style="width:217px">
          </el-date-picker>
          <el-radio v-model="radio">永久</el-radio>
        </el-form-item>
        <el-form-item label="营业执照">
          <div class="show-img" v-if="editForm.BusinessLicenseImg">
            <img  :src="editForm.BusinessLicenseImg" class="avatar">
            <i class="el-icon-error uploader-delete" @click="delectBusinessLicenseImg"></i>
          </div>
            <el-upload
            v-else
            class="avatar-uploader"
            :http-request="editUploadFile"
            action="http://210.76.124.110:86/api/v1/file/push"
            :show-file-list="false"
            >
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editClose">取消</el-button>
        <el-button type="primary" @click.native="editSubmit('editForm')">提交</el-button>
      </div>
    </el-dialog>
    <!--新增界面-->
    <div class="_order_elasticFrame" v-if="addFormVisible" v-bind:class="{ '_order_elasticFrame' : flagAdd , '_order_elasticFrame _order_elasticFrame_True' : addFormVisible}">
      <div class="_elastic_frame">
        <p class="el-dialog__header">
          <span>新增</span>
          <button @click="flagClick" type="button" aria-label="Close" class="dialog__headerbtn">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </p>
        <div class="el-dialog__body">
          <div class="_organization_from">
            <el-form :model="addForm" label-width="120px" ref="addForm">
              <el-form-item label="机构名称" prop="Name" :rules="[{ required: true, message: '机构名称不能为空'}]">
                <el-input v-model="addForm.Name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="机构类型" prop="Type" :rules="[{ required: true, message: '请选择机构类型'}]">
                <el-select v-model="addForm.Type" style="width:100%" placeholder="请选择">
                  <el-option v-for="item in typeOpption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="负责人" prop="ResponsiblePersonName" :rules="[{ required: true, message: '负责人不能为空'}]">
                <el-input v-model="addForm.ResponsiblePersonName" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="ResponsiblePersonSex" >
                <el-radio-group v-model="addForm.ResponsiblePersonSex">
                  <el-radio :label="0">男</el-radio>
                  <el-radio :label="1">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="联系电话" prop="ResponsiblePersonPhone" :rules="[{ required: true, message: '联系电话不能为空'}]">
                <el-input v-model="addForm.ResponsiblePersonPhone" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="单位地址" prop="Address" :rules="[{ required: true, message: '单位地址不能为空'}]">
                <el-input v-model="addForm.Address" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="单位人数" prop="StaffCnt" :rules="[{ required: true, message: '单位人数不能为空'}]">
                <el-input v-model="addForm.StaffCnt" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="状态" prop="State" :rules="[{ required: true, message: '请选择状态'}]">
                <el-select v-model="addForm.State" style="width:100%" placeholder="请选择">
                  <el-option v-for="item in stateSelectOpption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="到期时间" :rules="[{ required: true, message: '请选择到期时间'}]">
                <el-date-picker v-model="addForm.Expired" type="date" placeholder="选择日期" style="width:217px">
                </el-date-picker>
                <el-radio v-model="radio">永久</el-radio>
              </el-form-item>
              <el-form-item label="营业执照">
                <div class="show-img" v-if="addForm.BusinessLicenseImg">
                   <img  :src="addForm.BusinessLicenseImg" class="avatar">
                  <i class="el-icon-error uploader-delete" @click="addFormDelImg"></i>
                </div>
                <el-upload
                  v-else
                  class="avatar-uploader"
                  :http-request="addUploadFile"
                  action="http://210.76.124.110:86/api/v1/file/push"
                  :show-file-list="false"
                  >
                  <img v-if="addForm.BusinessLicenseImg" :src="addForm.BusinessLicenseImg" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-form>
            <div class="_organization_from_right">
              <img src="../../assets/logo.png" />
            </div>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="flagClick">取消</el-button>
            <el-button type="primary" @click.native="addSubmit('addForm')" :loading="addLoading" v-model="addFormVisible">提交</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="_zhe_ceng" v-bind:class="flagFalse ? '_zhe_ceng block' : '_zhe_ceng' ">
      <div class="top">
        <p @click="pCilck">x</p>
        <img :src="imgContent" />
      </div>
    </div> -->
  </section>
</template>

<script>
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default {
  data() {
    return {
      flagAdd: true,
      flagFalse: false,
      imgContent: "",
      tion: "",
      radio: "",
      size: 0,
      list: [],
      //列表查询条件
      searchForm: {
        companyName: '',
        phone: '',
        state: '',
        accountId : ""
      },
      editFormVisible: false, //编辑界面是否显示
      //编辑界面数据
      editForm: {
        id: 0,
        name: "",
        code: "",
        statutory: "",
        phone: "",
        account: "",
        number: "",
        state: "",
        date: ""
      },
      //新增相关数据
      addFormVisible: false, //新增界面是否显示
      addLoading: false,
      //新增表单参数
      addForm: {
        ParentId: "", //(integer, optional): 父节点
        Type: "", //(integer, optional): 机构类型，从字典接口获取
        StaffCnt: "", //(integer, optional): 职工人数
        BusinessLicenseImg: "", //(string, optional): 营业执照
        CreateAccountId: "", //(integer, optional): 创建者账号id
        Name: "", //(string, optional): 名称
        DescDetail: "", //(string, optional): 机构详情
        Address: "", //(string, optional): 地址
        State: "", //(integer, optional): 状态，字典获取
        Expired: "", //(string, optional): 到期时间
        ResponsiblePersonName: "", //(string, optional): 负责人姓名
        ResponsiblePersonSex: 0, //(integer, optional): 负责人性别，字典接口获取
        ResponsiblePersonPhone: "" //(string, optional): 负责人联系电话
      },
      //修改表单参数
      editForm: {
        ParentId: "", //(integer, optional): 父节点
        Type: "", //(integer, optional): 机构类型，从字典接口获取
        StaffCnt: "", //(integer, optional): 职工人数
        BusinessLicenseImg: "", //(string, optional): 营业执照
        CreateAccountId: "", //(integer, optional): 创建者账号id
        Name: "", //(string, optional): 名称
        DescDetail: "", //(string, optional): 机构详情
        Address: "", //(string, optional): 地址
        State: "", //(integer, optional): 状态，字典获取
        Expired: "", //(string, optional): 到期时间
        ResponsiblePersonName: "", //(string, optional): 负责人姓名
        ResponsiblePersonSex: "", //(integer, optional): 负责人性别，字典接口获取
        ResponsiblePersonPhone: "" //(string, optional): 负责人联系电话
      },
      tableEnd: [],
      selectedOptions: [],
      selectedOptions1: [],
      value1: "",
      accountId: "", //用户id
      //列表相关
      pageTableData: [], //机构列表数据
      currentPage: 1, //初始页
      pageSize: 5,
      totalItems: 0,
      //机构类型
      typeOpption: [],
      //查询状态类型
      stateSelectOpption: [],
      //营业执照
      imageUrl: ""
    };
  },
  /**
    * mounted 加载
  */
  mounted() {
    this.getList();
    var parentId =  this.$route.query.parentId  || 62;
    this.$http.get('/api/v1/consts',{
      parentId: 62
    }).then(res => {
      console.log(res)
      res.data.Obj.map(item=>{
        this.stateSelectOpption.push({
          value : item.Id,
          label : item.Name
        })
      })
    })
    this.$http.get('/api/v1/consts',{
      parentId: 66
    }).then(res => {
      console.log(res)
      res.data.Obj.map(item=>{
        this.typeOpption.push({
          value : item.Id,
          label : item.Name
        })
      })
    })
  },
  methods: {
    /**
      * getList 获取列表信息
    */
    getList() {
      if (this.$route.query.parentId) {
        this.getChildren(this.$route.query.parentId);
      } else {
        this.getListData();
      }
    },
    /**
     * getChildren 获取子机构列表信息
     * @param id  父节点id
   */
    getChildren(id) {
      this.pageTableData = [];
      this.$http.get('/api/v1/childcompany', {
        parentId: id
      }).then(res => {
        this.pageTableData = (res.data.Obj || []).reverse();
        console.log(res, 'children')
      })
    },
    /**
     * getListData 获取顶级列表信息
     */
    getListData() {
      const role = sessionStorage.getItem("role");
      if (role) {
        const accountId = JSON.parse(role).AccountId;
        this.accountId = accountId;
        this.$http.get(`/api/v1/staff/${this.accountId}/company `)
        .then(res => {
            this.pageTableData = res.data.Obj;
            this.totalItems = this.pageTableData.length;
            // this.currentPage = 1;
        });
      }
    },
    /**
     * addUploadFile 新增上传文件
     * @param params 改变的数量
     */
    addUploadFile(params) {
      const _file = params.file;
      var formData = new FormData();
      let fileName = _file.name.split(',');
      formData.append("file", _file);
      formData.append("accountId", this.accountId);
      formData.append("extension", fileName[fileName.length - 1]);
      return this.$http.post(`/api/v1/file/push`,formData)
      .then(res=>{
        this.addForm.BusinessLicenseImg = res.data.Obj[0]
      })
    },
    /**
     * editUploadFile 新增上传文件
     * @param params 改变的数量
     */
    editUploadFile(params) {
      const _file = params.file;
      var formData = new FormData();
      let fileName = _file.name.split(',');
      formData.append("file", _file);
      formData.append("accountId", this.accountId);
      formData.append("extension", fileName[fileName.length - 1]);
      return this.$http.post(`/api/v1/file/push`,formData)
      .then(res=>{
        this.editForm.BusinessLicenseImg = res.data.Obj[0]
      })
    },
    /**
     * pCilck 图片点击关闭
     */
    // pCilck() {
    //   this.flagFalse = !this.flagFalse;
    // },
    /**
     * imgBtn 点击图片放大
     * @param val 改变的数量
     */
    // imgBtn(url) {
    //   this.flagFalse = !this.flagFalse;
    //   this.imgContent = url;
    // },
    /**
     * handleSizeChange 列表一页的数量进行改变
     * @param val 改变的数量
     */
    handleSizeChange(val) {
      this.pageSize = val;
      // this.handleCurrentChange(this.currentPage)
    },
    /**
     * handleSelectionChange 勾选列表时触发
     * @param data  勾选数据
     */
    handleSelectionChange(data) {
      console.log(val);
      // this.multipleSelection = val;
    },
    /**
     * handleCurrentChange 列表页数进行改变
     * @param val 改变的页数
     */
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    /**
     * flagClick 关闭
     */
    flagClick() {
      this.addFormVisible = false;
      this.addForm = {
        ParentId: "", //(integer, optional): 父节点
        Type: "", //(integer, optional): 机构类型，从字典接口获取
        StaffCnt: "", //(integer, optional): 职工人数
        BusinessLicenseImg: "", //(string, optional): 营业执照
        CreateAccountId: "", //(integer, optional): 创建者账号id
        Name: "", //(string, optional): 名称
        DescDetail: "", //(string, optional): 机构详情
        Address: "", //(string, optional): 地址
        State: "", //(integer, optional): 状态，字典获取
        Expired: "", //(string, optional): 到期时间
        ResponsiblePersonName: "", //(string, optional): 负责人姓名
        ResponsiblePersonSex: 0, //(integer, optional): 负责人性别，字典接口获取
        ResponsiblePersonPhone: "" //(string, optional): 负责人联系电话
      }
    },
      /**
       * handleAdd 显示新增机构表单
       */
      handleAdd() {
        this.addFormVisible = true;
      },
      /**
       * addSubmit 新增机构
       * @param formName 表单名称
      */
      addSubmit(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            // alert('submit!');
            this.addForm.CreateAccountId = this.accountId;
            this.addForm.ParentId = this.$route.query.parentId || -1;
            this.$http.post(`/api/v1/staff/${this.accountId}/stafftocompany`,this.addForm)
            .then(res=>{
              this.addFormVisible = false;
              this.getList();
              this.addForm = {
                ParentId: "", //(integer, optional): 父节点
                Type: "", //(integer, optional): 机构类型，从字典接口获取
                StaffCnt: "", //(integer, optional): 职工人数
                BusinessLicenseImg: "", //(string, optional): 营业执照
                CreateAccountId: "", //(integer, optional): 创建者账号id
                Name: "", //(string, optional): 名称
                DescDetail: "", //(string, optional): 机构详情
                Address: "", //(string, optional): 地址
                State: "", //(integer, optional): 状态，字典获取
                Expired: "", //(string, optional): 到期时间
                ResponsiblePersonName: "", //(string, optional): 负责人姓名
                ResponsiblePersonSex: 0, //(integer, optional): 负责人性别，字典接口获取
                ResponsiblePersonPhone: "" //(string, optional): 负责人联系电话
              }
            })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      /**
       * handleEdit 显示编辑机构表单
       * @param index 列表下标
       * @param row  列表数据
      */
      handleEdit(index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
      },
      /**
       * editSubmit 编辑机构
       * @param formName 表单名称
      */
      editSubmit: function(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.$http.put(`/api/v1/company `,this.editForm)
                .then(res=>{
                  this.editClose();
                  this.getList();
                })
            });
          }
        });
      },
      editClose :function(){
        this.editFormVisible = false;
        this.editForm = {
          ParentId: "", //(integer, optional): 父节点
          Type: "", //(integer, optional): 机构类型，从字典接口获取
          StaffCnt: "", //(integer, optional): 职工人数
          BusinessLicenseImg: "", //(string, optional): 营业执照
          CreateAccountId: "", //(integer, optional): 创建者账号id
          Name: "", //(string, optional): 名称
          DescDetail: "", //(string, optional): 机构详情
          Address: "", //(string, optional): 地址
          State: "", //(integer, optional): 状态，字典获取
          Expired: "", //(string, optional): 到期时间
          ResponsiblePersonName: "", //(string, optional): 负责人姓名
          ResponsiblePersonSex: "", //(integer, optional): 负责人性别，字典接口获取
          ResponsiblePersonPhone: "" //(string, optional): 负责人联系电话
        }
      },
      /**
       * updateBusinessLicenseImg 修改营业执照图片
       */
      delectBusinessLicenseImg (){
        this.editForm.BusinessLicenseImg = '';
      },
        /**
       * addFormDelImg 修改新加机构营业执照图片
       */
      addFormDelImg (){
        this.addForm.BusinessLicenseImg = '';
      },
      /**
       * handleDel 列表中删除
       * @param index  列表的index
       * @param row  列表的一条数据
       */
      handleDel: function(index, row) {
        this.$confirm("确认删除该记录吗？", "提示", {
            type: "warning"
        }).then(() => {
          console.log(row)
            this.$http.delete('/api/v1/company?id='+row.Id ,row)
            .then(res=>{
                this.getListData();
            })
        });
      },
      /**
     * srarch 查询
     */
      srarch() {
        var _josn ={ };
        if(this.searchForm.companyName){
          _josn['companyName'] = this.searchForm.companyName
        }
        if(this.searchForm.phone){
          _josn['phone'] = this.searchForm.phone
        }
        if(this.searchForm.state){
          _josn['state'] = this.searchForm.state
        }
        _josn['AccountId'] = this.accountId;
        this.$http.get('/api/v1/company/search', _josn).then(res => {
          this.pageTableData = res.data.Obj || [];
          this.totalItems = this.pageTableData.length;
        })
      },
      /**
       * stateFilter 状态内容匹配
       * @param state 状态
       * @returns value  枚举的label
       */
      stateFilter(state){
        var value = '';
        this.stateSelectOpption.map(item=>{
          if(state == item.value){
            value = item.label;
            return ;
          }
          return ;
        })
        return value;
      },
      /**
     * formatter 时间格式化
     */
    formatter(row, column) {
      // console.log(row, column)
      var time = row.CreateTime;
      // var d = new Date(time);
      // var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var dateee = new Date(time).toJSON();
      var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')

      return times;
    },
      /**
       * typeFilter 内容匹配
       * @param type 状态
       * @returns value  枚举的label
       */
      typeFilter(type){
        var value = '';
        this.typeOpption.map(item=>{
          if(type == item.value){
            value = item.label;
            return ;
          }
          return ;
        })
        return value;
      }
    },
    computed: {
      tableList() {
        return this.pageTableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      }
    }
};
</script>
<style lang="scss">
/*上传组件样式*/
.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.show-img{
  position: relative;
  width: 178px;
  .avatar{
    display: block;
      width: 178px;
      height: 178px;
  }
  .uploader-delete{
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 20px;
  }
}
</style>
<style scoped lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  font-size: 12px;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 10px;
  padding-left: 8px;
  width: 50%;
}
.container .main .content-container[data-v-51a2c380] {
  flex: 1;
  padding: 2px;
}
.container .main .content-container[data-v-23eb5d54] {
  overflow: hidden;
}
.el-form-item {
  margin-bottom: 10px;
}
.add {
  display: inline-block;
}
.add-image {
  margin-left: 10px;
  height: 80px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  padding: 15px 5px 0 5px;
}
.add-image .xiangji {
  width: 26px;
  height: 26px;
}
.good-item .choose {
  color: #fff;
  background-color: #87582e;
  color: #fff;
  border: 0;
}
.mui-btn-block {
  border: 0;
  border-radius: 0;
  background-color: #87582e;
  color: #fff;
  margin-bottom: 0;
  bottom: 0;
}
.mui-buttom {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
}
.img-list {
  overflow: hidden;
}
.img-list > li {
  float: left;
  width: 32%;
  margin-top: 1%;
  position: relative;
  list-style: none;
}
.img-list > li > div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
}
.toolbar form {
  display: flex;
}
.toolbar form .el-form-item:nth-last-child(1) {
  flex: 1;
  text-align: right;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 12px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
._zhe_ceng {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background:rgba(0, 0, 0, 0.2);
  filter:alpha(opacity=60);
  opacity:0.6; */
  z-index: 999;
  display: none;
  text-align: center;
}
._zhe_ceng .top img {
  width: 400px;
  height: 400px;
  margin-top: 40%;
  transform: translate(0, -100%);
  z-index: 1000;
  border-radius: 10px;
}
._zhe_ceng p {
  font-size: 30px;
  position: absolute;
  right: 33%;
  top: 18%;
  cursor: pointer;
}
.block {
  display: block !important;
}
._order_elasticFrame {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  overflow-y: auto;
}
._order_elasticFrame ._elastic_frame {
  width: 50%;
  background-color: #fff;
  margin: 30px auto;
}
._order_elasticFrame ._elastic_frame .el-dialog__header {
  padding: 20px 20px 10px;
  display: flex;
  justify-content: space-between;
}
._order_elasticFrame ._elastic_frame .el-dialog__header span {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
._order_elasticFrame ._elastic_frame .el-dialog__header .dialog__headerbtn {
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
}
.dialog-footer {
  text-align: center;
}
.el-form {
  padding: 0 20px;
  color: #606266;
  font-size: 14px;
}
._order_elasticFrame_True {
  display: block;
}
._organization_from {
  display: flex;
}
._organization_from form {
  width: 70%;
}
._organization_from ._organization_from_right {
  width: 30%;
  text-align: center;
}
._organization_from form .el-form-item {
  margin: 20px 0;
}
._organization_from form .el-cascader {
  width: 100%;
}
</style>
