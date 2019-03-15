<template>
  <div class="_commodity_page">
    <div class="_commodity_page_left">
      <el-col :span="50" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item prop="date">
            <el-input v-model="filters.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="date">
            <el-input v-model="filters.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getUsers">搜索</el-button>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" @click="getUsers">高级搜索</el-button>
          </el-form-item> -->
          <el-form-item>
            <router-link to="/commodityNewlyAdded"><el-button type="primary" @click="handleAdd">+新增会员</el-button></router-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table style="100%" :data="user" @row-click="handle" >
        <el-table-column prop="Name" label="姓名"></el-table-column>
        <el-table-column prop="Sex" label="性别"></el-table-column>
        <el-table-column prop="Age" label="年龄"></el-table-column>
      </el-table>
     <!-- 表格分页 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="totalItems">
      </el-pagination>
    </div>
    <div class="_commodity_page_right">
      <div class="_commodity_page_right_top">
        <div class="_page_right_img">
        <img />
        </div>
        <div class="_page_right_content">
          <div class="_page_right_content_detailed">
            <ul :class="detailFlag ? '_page_right_content_detailed_content _page_right_content_detailed_content_Flag' : '_page_right_content_detailed_content' " >
              <li>
                <span>姓名:</span>
                <p>{{item.Name}}</p>
              </li>
              <li>
                <span>性别:</span>
                <p>{{item.Sex}}</p>
              </li>
              <li>
                <span>年龄:</span>
                <p>{{item.Age}}岁</p>
              </li>
              <li>
                <span>生日:</span>
                <p>{{item.Birthday}}</p>
              </li>
              <li>
                <span>手机:</span>
                <p>{{item.Phone}}</p>
              </li>
              <li>
                <span>电话:</span>
                <p>{{item.Phone}}</p>
              </li>
              <li class="_identity">
                <span>身份证号:</span>
                <p>{{item.CardId}}</p>
              </li>
              <li class="_address">
                <span>联系地址:</span>
                <p>{{item.Addr}}</p>
              </li>
              <li>
                <span>身高:</span>
                <p>{{item.Height}}CM</p>
              </li>
              <li>
                <span>体重:</span>
                <p>{{item.Weight}}KG</p>
              </li>
            </ul>
            <el-form>
              <el-form-item>
                <el-button type="primary" @click="detail">{{detailText}}</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="_page_right_content_btn">
            <el-form>
              <el-form-item>
                <el-button type="primary" @click="editClick">编辑</el-button>
              </el-form-item>
              <el-form-item>
                <template slot-scope="scope">
                  <!-- <el-button type="primary" @click="reveClick(scope.$index, scope.row)">删除</el-button> -->
                  <el-button type="danger" icon="el-icon-delete" @click="reveClick(index,item)">删除</el-button>
                </template>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="_commodity_page_right_bottom">
        <ul>
          <li @click="clickTab(1)"><router-link to="/commodity/integration">最新动态</router-link></li>
          <li @click="clickTab(2)"><router-link to="/commodity/ConsultationManagement">健康管理</router-link></li>
          <li @click="clickTab(3)"><router-link to="/commodity/HealthAgreement">健康咨询</router-link></li>
          <li @click="clickTab(4)"><router-link to="/commodity/MedicalRecords">健康档案</router-link></li>
          <li @click="clickTab(5)"><router-link to="/commodity/deviceManagement">订单信息</router-link></li>
          <li @click="clickTab(6)"><router-link to="/commodity/SafetyMonitoring">积分信息</router-link></li>
          <li @click="clickTab(7)"><router-link to="/commodityn">余额信息</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      filters:{
        name : '',
        phone : ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      addForm:{
        name:'',
        date:'',
        read:'',
        issue:'',
        name1: '',
        desc : ''
      },
      user : [],
      userListLeng : '',
      detailFlag : false,
      detailText : '查看详情',
      item:{},
      currentPage: 1, //初始页
      pageSize: 5,
      totalItems: 0,
      BelongInfoList : [],
      index : 0
    }
  },
  methods : {
    handle(row, event, column) {
      console.log(row)
      this.user.map((item,index)=>{
        if(row.Id === item.Id){
          // this.index = index;
        }
      })
      this.item = row;
    },
    //查询
    getUsers(){
      if(this.filters.name != '' || this.filters.phone != ''){
        var Obj = sessionStorage.getItem('role');
        if(Obj){
          Obj = JSON.parse(Obj);
          let url1 = `/api/v1/staff/${Obj.AccountId}/alluserinfos?page=${this.currentPage}&row=${this.pageSize}&name=${this.filters.name}&phone=${this.filters.phone}`;
          this.$api.staff.getAllUserInfo(url1).then(res=>{
            console.log(res)
            this.totalItems = res.data.Obj.length
            let arr = [];
            for(var item of res.data.Obj){
              arr = arr.concat(item.UserInfo)
            }
            this.user = arr;
            console.log(this.user)
            this.item = arr[0];
          })
        }
      }else{
        this.loginUser()
      }
    },
    //添加页面显示
    handleAdd:function(){
      // console.log(this.order)
      // this.addFormVisible=true;
      // this.addForm = {
      //   name:'',
      //   date:'',
      //   read:'',
      //   issue:''
      // }
    },
    //删除
    reveClick(index,row){
      console.log(index,row)
      console.log(this.BelongInfoList)
      const companyId = this.BelongInfoList[index].BelongInfo[0].split(',')[0];
      console.log(companyId)
      if(companyId === '-1'){
        companyId = this.BelongInfoList[index].BelongInfo[0].split(',')[2];
      }
      this.$api.staff.deleteStafftocompany(`/api/v1/stafftocompany?accountId=${row.AccountId}&companyId=${companyId}`).then(res=>{
        this.loginUser()
      })
    },
    //添加确定按钮
    addSubmit:function(){
      
    },
    /**
     * handleSizeChange 列表一页的数量进行改变
     * @param val 改变的数量
     */
    handleSizeChange(val) {
      console.log(val)
      this.pageSize = val;
      this.loginUser()
      // this.handleCurrentChange(this.currentPage)
    },
    /**
     * handleCurrentChange 列表页数进行改变
     * @param val 改变的页数
     */
    handleCurrentChange(val) {
      console.log(val)
      this.currentPage = val;
      this.loginUser()
    },
    //编辑
    editClick(){
      this.$router.push({path:'/commodityNewlyAdded',query:{id:this.item.Id}});
    },
    clickTab(id){
      console.log(id)
    },
    loginUser(){
      var Obj = sessionStorage.getItem('role');
      let content = sessionStorage.getItem('content')
      if (Obj) {
        Obj = JSON.parse(Obj);
        let url2 = `/api/v1/staff/${Obj.AccountId}/alluser/cnt`;
        let data = {accountId:Obj.AccountId,excludeAccountIds:[]};
        this.$api.staff.getAllUserNum(url2,data).then(res=>{
          console.log(res)
          this.totalItems = res.data.Obj
          this.userListLeng = res.data.Obj
        })
        console.log(Obj.AccountId)
        let url1 = `/api/v1/staff/${Obj.AccountId}/alluserinfos`+"?page="+this.currentPage+"&row="+this.pageSize
        this.$api.staff.getAllUserInfo(url1).then(res=>{
          let arr = [];
          var date = new Date();
          for(var item of res.data.Obj){
            item.UserInfo.Birthday = new Date(+new Date(item.UserInfo.Birthday) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
            var string = item.UserInfo.Birthday.trim().split(" ")
            item.UserInfo.Birthday = string[0]
            item.UserInfo.Age = parseInt(date.getFullYear()) - parseInt(string[0].substring(0,4))
            arr = arr.concat(item.UserInfo)
          }
          for(let i=0;i<arr.length;i++){
            if(arr[i].Sex === 1){
              arr[i].Sex = "男"
            }else{
              arr[i].Sex = "女"
            }
          }
          this.user = arr;
          this.BelongInfoList = res.data.Obj;
          console.log(this.BelongInfoList)
          this.item = arr[0];
        })
      }
    },
    detail(){
      if(this.detailFlag){
        this.detailFlag = false;
        this.detailText = '查看详情'
      }else{
        this.detailFlag = true;
        this.detailText = '收回'
      }
      // this.detailFlag = true;
    }
  },
  mounted(){

    this.loginUser()
  }
}
</script>

<style scoped>
  ._commodity_page{
    display: flex;
  }
  ._commodity_page_left{
    width: 25%;
    border: 1px solid #f2f2f2;
    margin-right: 10px;
  }
  ._commodity_page_left .el-pagination{
    text-align: center;
    margin-top: 10px;
  }
  .toolbar{
    background-color: #fff;
  }
  ._commodity_page_right{
    width: 80%;
    height: 100%;
    border: 1px solid #f2f2f2;
    padding-top: 15px;
  }
  ._commodity_page_right ._commodity_page_right_top{
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 20px;
  }
  ._page_right_img{
    width: 18%;
    padding-left: 10px;
  }
  ._page_right_img img{
    width: 100%;
    margin-top: 10px;
  }
  ._page_right_content{
    width: 82%;
    display: flex;
  }
  ._page_right_content_detailed ._page_right_content_detailed_content{
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    height: 250px;
    overflow: hidden;
  }
  ._page_right_content_detailed_content_Flag{
    height: auto!important;
    /* overflow: hidden; */
  }
  ._page_right_content_detailed ._page_right_content_detailed_content li{
    width: 50%;
    display: flex;
    line-height: 50px;
  }
  ._page_right_content_detailed ._page_right_content_detailed_content li span{
    font-size: 16px;
    margin-right: 10px;
  }
  ._page_right_content_detailed ._page_right_content_detailed_content li p{
    flex: 1;
    font-size:16px;
  }
  ._page_right_content_detailed{
    width: 85%;
  }
  ._identity,._address{
    width: 100%!important;
    display: flex;
  }
  ._identity span,._address span{
    margin-right: 10px;
  }
  ._identity p,._address p{
    flex: 1;
  }
  ._page_right_content_btn{
    width: 15%;
    padding-right: 20px;
  }
  ._page_right_content_btn button{
    width: 100%;
  }
  ._commodity_page_right_bottom ul{
    display: flex;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #3685D7;
    letter-spacing: 0.62px;
  }
  ._commodity_page_right_bottom ul li{
    width: 14%;
    line-height: 50px;
    text-align: center;
  }
  ._commodity_page_right_bottom ul .router-link-active{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #3685D7;
    letter-spacing: 0;
    position: relative;
  }
  ._commodity_page_right_bottom ul .router-link-active:before{
    background: #409EFF;
    border-radius: 2px;
    content: '';
    height: 3px;
    position: absolute;
    top: 25px;
    width: 50px;
    left: 50%;
    transform: translate(-50%,0)
  }
  ._commodity_page_right_bottom ul li a{
    color : #000;
    text-decoration: none;
  }
</style>
