<template>
    <div class="bar">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item label="编号" prop="date">
            <el-input v-model="filters"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="date">
            <el-input v-model="filters"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="date">
            <el-cascader
              :options="options"
              v-model="selectedOptions2"
              placeholder="全部状态"
              @change="handleChange2">
            </el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="getUsers">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">+新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
        <el-table :data="ordert" style="100%">
          <el-table-column prop="id" label="编号"></el-table-column>
          <el-table-column prop="order" label="名称"></el-table-column>
          <el-table-column prop="payment" label="图片"></el-table-column>
          <el-table-column prop="money" label="销售价"></el-table-column>
          <el-table-column prop="date" label="进货价"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="date" label="发布时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
         <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[7, 10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total='total'>
        </el-pagination>
        <!-- 添加内容 -->
        <div class="_order_elasticFrame" v-bind:class="{ '_order_elasticFrame' : flagAdd , '_order_elasticFrame _order_elasticFrame_True' : addFormVisible}">
          <div class="_elastic_frame">
            <p class="el-dialog__header">
              <span>新增商品</span>
              <button @click="flagClick" type="button" aria-label="Close" class="dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button>
            </p>
            <div class="el-dialog__body">
              <el-form :model="addForm" label-width="120px" ref="addForm">
              <div class="el_from_div">
                <el-form-item label="编号" prop="name">
                  <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="品牌" prop="date">
                  <el-cascader
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
                  </el-cascader>
                </el-form-item>
                <el-form-item label="名称" prop="read">
                    <el-input v-model="addForm.read" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="单位" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="销售名" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="库存" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="issue">
                  <el-cascader
                    :options="options"
                    v-model="selectedOptions1"
                    @change="handleChange1">
                  </el-cascader>
                </el-form-item>
                <el-form-item label="限购量" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="进货价" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="销售价" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="积分" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="重量" prop="issue">
                    <el-input v-model="addForm.issue" auto-complete="off"></el-input>
                </el-form-item>
                </div>
                <el-form-item label="规格">
                  <el-input v-model="addForm.name1"></el-input>
                </el-form-item>
                <el-form-item label="图片">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="addForm.desc"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">保存</el-button>
                <el-button @click.native="addFormVisible = false">取消</el-button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
require("es6-promise").polyfill();
require('isomorphic-fetch');
export default {
  data() {
    return {
      total:'',
      currentPage:1, //初始页
      pagesize:7,
      filters:'',
      orderData:[],
      opt:[],
      options: [{
        value : 'zhinan',
        label : '指南'
      },{
        value : 'zujian',
        label : '组件'
      },{
        value : 'ziyuan',
        label : '资源'
      }],
      addForm:{
        name:'',
        date:'',
        read:'',
        issue:'',
        name1: '',
        desc : ''
      },
      addFormVisible: false,//添加内容显示
      flagAdd : true,//添加内容不显示
      addLoading: false,
      dialogImageUrl: '',
      dialogVisible: false,
      selectedOptions: [],
      selectedOptions1 : [],
      selectedOptions2 : [],
    };
  },
  created(){
    let _this =this;
    fetch('../../../static/data/order.json').then(function(res){
      return res.json()
    }).then(function(stories){
      _this.orderData = stories
      console.log(stories)
    }).then(function(err){
      console.log(err)
    })
  },
  mounted(){
    this.total = this.orderData.length;
    if(this.total > this.pagesize){
      for(let index = 0; index<this.pagesize;index++){
        this.opt.push(this.orderData[index])
      }
    }else{
      this.opt = this.orderData
    }
  },
  computed:{
    ordert(){
      let newList=[];
      let sonList=[];
      var _this = this;
      var NewItems = [];
      let pages=Math.ceil(_this.orderData.length/_this.pagesize);//8为每页设置数量
      for(let i=0;i<pages;i++){
      sonList=_this.orderData.slice(i*_this.pagesize,i*_this.pagesize+_this.pagesize);//8为每页设置数量
        newList.push(sonList)
      }
      if(_this.filters !== ''){
      _this.orderData.map(item=>{
          if (item.payment.indexOf(_this.filters) != -1) {
            NewItems.push(item);
          }
        })
        _this.total=NewItems.length
        return NewItems;
      }
      _this.total=_this.orderData.length
      return newList[_this.currentPage-1]; 
    }
  },
  methods:{
    handleSizeChange(val) {
        this.pagesize = val;
        this.handleCurrentChange(this.currentPage)
    },
    handleCurrentChange(val) {
        this.currentPage = val;
        if(!this.flag){
          this.currentChangePage(this.member)
        }else{
          this.currentChangePage(this.filterTableDataEnd)
        }
    },
    currentChangePage(data,currentPage){
      let from = (this.currentPage -1) * this.pagesize;
      let to = this.currentPage * this.pagesize;
      for(; from<to;from++){
        if(data[from]){
          this.opt.push(data[from])
        }
      }
    },
    //删除
    deleteAdd:function (index) {
      this.$confirm('确认删除该记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.orderData.splice(index, 1)
        this.total = this.orderData.length
      })
    },
    //查询
    getUsers(){

    },
    //添加页面显示
    handleAdd:function(){
      console.log(this.order)
      this.addFormVisible=true;
      this.addForm = {
        name:'',
        date:'',
        read:'',
        issue:''
      }
    },
    //添加确定按钮
    addSubmit:function(){
      this.addForm = {
        name:this.addForm.name,
        date:this.addForm.date,
        read:this.addForm.read,
        issue:this.addForm.issue
      }
      this.orderData.push(this.addForm);
      this.addFormVisible = false;
      this.totalItems = this.orderData.length;
    },
    handleChange(value) {
      console.log(value);
    },
    handleChange1(value) {
      console.log(value);
    },
    handleChange2(value) {
      console.log(value);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    flagClick(){
      this.addFormVisible = false;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  
};
</script>
<style scoped>
  ._order_elasticFrame{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
    overflow-y: auto;
  }
  ._order_elasticFrame ._elastic_frame{
    width: 50%;
    background-color: #fff;
    margin: 30px auto;
    border-radius: 2px;
  }
  .el_from_div{
    display: flex;
    flex-wrap: wrap;
  }
  .el-cascader{
    width: 100%;
  }
  .el_from_div .el-form-item{
    width: 50%;
  }
  ._order_elasticFrame ._elastic_frame .el-dialog__header{
    padding: 20px 20px 10px;
    display: flex;
    justify-content:space-between;
  }
  ._order_elasticFrame ._elastic_frame .el-dialog__header span{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  ._order_elasticFrame ._elastic_frame .el-dialog__header .dialog__headerbtn{
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
  }
  .dialog-footer{
    text-align: center;
  }
  .el-form{
    padding: 0 20px;
    color: #606266;
    font-size: 14px;
  }
  ._order_elasticFrame_True{
    display: block;
  }
  .toolbar form{
    display: flex;
  }
  .toolbar form .el-form-item:nth-last-child(1){
    flex: 1;
    text-align: right;
  }
</style>