<template>
  <div class="por">
    <el-row class="toolbar" style="padding-bottom: 0px;">
      <!-- <el-col :span="24"> -->
        <el-form :inline="true" class="_toolbar_Housekeeper_form">
          <div class="_toolbar_Housekeeper_form_left">
            <el-form-item>
              <el-input v-model="filters" placeholder="请输入名称/手机查询关键字"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="date">
              <el-select v-model="department" placeholder="全部类型" style="width:130px;">
                <el-option style="height:45px;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getUsers">查询</el-button>
            </el-form-item>
          </div>
          <div class="_toolbar_form_right">
            <!-- <el-form-item>
              <el-button type="primary" @click="handleAdd">+新增</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">修改</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">删除</el-button>
            </el-form-item> -->
             <el-form-item style="float:right;">
              <el-button-group>
                  <el-button type="primary" @click="handleAdd">+新增</el-button>
                  <el-button type="primary">修改</el-button>
                  <el-button type="primary">删除</el-button>
              </el-button-group>
            </el-form-item>
          </div>
        </el-form>
      <!-- </el-col> -->
    </el-row>
    <el-table :data="listData" style="width: 100%">
      <el-table-column fixed prop="name" label="序号"></el-table-column>
      <el-table-column prop="type" label="姓名"></el-table-column>        
      <el-table-column prop="place" label="性别"></el-table-column>
      <el-table-column prop="age" label="出生日期"></el-table-column>
      <el-table-column prop="experience" label="身份证号"></el-table-column>
      <el-table-column prop="education" label="联系电话"></el-table-column>
      <el-table-column prop="blood" label="联系地址"></el-table-column>
      <el-table-column prop="zodiac" label="状态"></el-table-column>
      <el-table-column prop="constellation" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-table :data="itemData" style="width: 100%" v-if="this.itemData !== null">
      <el-table-column fixed prop="name" label="姓名"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>        
      <el-table-column prop="place" label="籍贯"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="experience" label="经验"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="blood" label="血型"></el-table-column>
      <el-table-column prop="zodiac" label="属相"></el-table-column>
      <el-table-column prop="constellation" label="星座"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="star" label="星级"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <!-- 编辑页面 -->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="120px" ref="editForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="editForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-input v-model="editForm.type" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="籍贯" prop="place">
                <el-input v-model="editForm.place" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="editForm.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="经验" prop="experience">
                <el-input v-model="editForm.experience" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="学历" prop="education">
                <el-input v-model="editForm.education" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="血型" prop="blood">
                <el-input v-model="editForm.blood" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="属相" prop="zodiac">
                <el-input v-model="editForm.zodiac" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="星座" prop="constellation">
                <el-input v-model="editForm.constellation" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model="editForm.price" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="星级" prop="star">
                <el-input v-model="editForm.star" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="editFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="editSubmit">提交</el-button>
        </div>
    </el-dialog>
    <!--新增界面-->
    <el-dialog title="新增" :visible.sync="addFormVisible" width="30" :before-close="handleClose">
      <div class="_nursing_form">
        <el-form :model="addForm" ref="addForm" class="_Newly_added_form">
          <el-form-item label="所属机构">
            <el-select v-model="department" placeholder="全部状态">
              <el-option style="height:45px;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="姓名" prop="name" required="true">
            <el-input v-model="addForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="phone"  required="true">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="生日"  required="true">
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="选择日期" style="width:217px">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="身份证号" prop="number"  required="true">
            <el-input v-model="addForm.number" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="open"  required="true">
            <el-input v-model="addForm.open" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" prop="account">
            <el-input v-model="addForm.account" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="phone">
            <el-radio v-model="radio1" label="1">启动</el-radio>
            <el-radio v-model="radio1" label="2">禁用</el-radio>
          </el-form-item>
          <el-form-item label="服务内容">
            <el-input type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="自我介绍">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <div class="_organization_img">
          <img src="../../assets/logo.png" alt="" >
        </div>
      </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="addFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提交</el-button>
        </span>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total='totalItems'>
    </el-pagination>
  </div>
</template>

<script>
  require("es6-promise").polyfill();
  require('isomorphic-fetch');

  export default {
    data() {
      return {
        filters:'',
        typeData:[],
        data:[],
        totalItems:0,
        currentPage:1, //初始页
        pagesize:5,
        isShowSelect:false,
        department:'',
        options:[
          {
            value:0,label:'保姆保洁'
          },{
            value:1,label:'月嫂'
          },{
            value:2,label:'育婴师'
          },{
            value:3,label:'小时工'
          },{
            value:4,label:'养老陪护'
          }
        ],
        editIndex: null,
        editFormVisible:false,//编辑页面是否显示
        //编辑页面数据
        editForm:{
          id:0,
          type:'',
          place:'',
          age:'',
          experience:'',
          education:'',
          blood:'',
          zodiac:'',
          constellation:'',
          price:'',
          star:''
        },
        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        addForm:{
          type:'',
          place:'',
          age:'',
          experience:'',
          education:'',
          blood:'',
          zodiac:'',
          constellation:'',
          price:'',
          star:''
        },
        getUsersData : null,
        radio:'',
        radio1 : '',
        value1: '',
        value2 : ''
      }
    },
    created(){
      let _this = this
      fetch('../../../static/data/list.json').then(function(res){
        return res.json()
      }).then(function(stories){
        console.log(stories)
        _this.typeData = stories
      }).then(function(err){
        console.log(err)
      })
    },
    methods:{
      //分页
      handleSizeChange(val) {
        this.pagesize = val;
        this.handleCurrentChange(this.currentPage)
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        if(!this.flag){
          this.currentChangePage(this.data)
        }else{
          this.currentChangePage(this.filterTableDataEnd)
        }
      },
      currentChangePage(nursing,currentPage){
        let from = (this.currentPage -1) * this.pagesize;
        let to = this.currentPage * this.pagesize;
        for(; from<to;from++){
          if(nursing[from]){
            this.data.push(nursing[from])
          }
        }
      },
      // 下拉菜单
      getCouponSelected(){
　　　  console.log(this.couponSelected)
　　　},
      //查询
      getUsers(){
        
      },
      handleClose(done){
        this.$confirm('确认关闭？')
        .then(_=>{
          done()
        })
        .catch(_=>{})
      },
      getCouponSelected(){
　　　  console.log(this.couponSelected)
　　　},
      //图片点击关闭
      pCilck(){
        this.flagFalse =  !this.flagFalse;
      },
      //图片显示
      imgBtn(id){
        this.flagFalse = !this.flagFalse;
        this.pageTableData.map((item,index)=>{
          if(index === id){
            this.imgContent = item.img
          }
        })
      },
      //显示编辑界面
      compileEdit(index,row){
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
        this.editIndex = index
      },
      //编辑
      editSubmit:function(row){
        this.$refs.editForm.validate((valid)=>{
            if(valid){
              this.$confirm('确认提交吗？','提交',{}).then(()=>{
                this.editLoading=true;
                this.editForm = {
                  type:this.editForm.type,
                  place:this.editForm.place,
                  age:this.editForm.age,
                  experience:this.editForm.experience,
                  education:this.editForm.education,
                  blood:this.editForm.blood,
                  zodiac:this.editForm.zodiac,
                  constellation:this.editForm.constellation,
                  price:this.editForm.price,
                  star:this.editForm.star
                }
                let bar = Object.assign({},this.editForm);
                this.nursing.splice(this.editIndex,1,bar);
                this.editFormVisible = false
              })
            }
        })
      },
      //删除
      deleteAdd:function(index){
        this.$confirm('确认删除该记录吗？','提示',{
          type:'warning'
        }).then(()=>{
          this.typeData.splice(index,1)
          this.totalItems = this.typeData.length
        })
      },
      //新增页面显示
      handleAdd: function(){
        this.addFormVisible = true;
        this.addForm = {
            type:'',
            place:'',
            age:'',
            experience:'',
            education:'',
            blood:'',
            zodiac:'',
            constellation:'',
            price:'',
            star:''
        }
      },
      //新增确定按钮
      addSubmit:function(){
        // this.addForm = {
        //   type:this.addForm.type,
        //   place:this.addForm.place,
        //   age:this.addForm.age,
        //   experience:this.addForm.experience,
        //   education:this.addForm.education,
        //   blood:this.addForm.blood,
        //   zodiac:this.addForm.zodiac,
        //   constellation:this.addForm.constellation,
        //   price:this.addForm.price,
        //   star:this.addForm.star
        // }
        // console.log(this.addForm)
        // this.nursing.push(this.addForm)
        this.addFormVisible = false;
      },
    },
    computed:{
      listData(){
        let newList=[];
        let sonList=[];
        var _this = this;
        var NewItems = [];
        let pages=Math.ceil(_this.typeData.length/_this.pagesize);//8为每页设置数量
        for(let i=0;i<pages;i++){
        sonList=_this.typeData.slice(i*_this.pagesize,i*_this.pagesize+_this.pagesize);//8为每页设置数量
          newList.push(sonList)
        }
        if(_this.filters !== ''){
        _this.typeData.map(item=>{
            if (item.name.indexOf(_this.filters) != -1) {
              NewItems.push(item);
            }
          })
          _this.totalItems=NewItems.length
          return NewItems;
        }
        _this.totalItems=_this.typeData.length
        return newList[_this.currentPage-1];
      },
    },
    mounted(){
      this.totalItems = this.typeData.length;
      if(this.totalItems > this.pagesize){
        for(let index=0; index<this.pagesize;index++){
          this.data.push(this.typeData[index])
        }
      }else{
        this.data = this.typeData
      }
    }
  }
</script>

<style scoped>
  ._toolbar_Housekeeper_form{
    display: flex;
    justify-content:space-between;
  }
  .container .main .content-container[data-v-51a2c380] {
    flex: 1;
    padding: 2px;
  }
 ._Newly_added_form .el-input{
    width: 70%;
  }
  .el-form-item {
    margin-bottom: 6px;
  }
  ._nursing_form{
    display: flex;
  }
  ._nursing_form form{
    width: 70%;
  }
  ._nursing_form ._organization_img{
    width: 30%;
    text-align: center;
  }
  ._Newly_added_form .el-form-item{
    display: flex;
  }
  ._Newly_added_form .el-form-item /deep/ .el-form-item__label{
    width: 20%;
  }
  ._Newly_added_form .el-form-item /deep/ .el-form-item__content{
    width: 80%;
  }
</style>

