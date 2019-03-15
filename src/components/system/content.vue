<template>
    <div class="contentn">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="tableDataName" placeholder="请输入标题"></el-input>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item> -->
           <!-- @click="getUsers" -->
          <!-- <el-form-item>
            <el-button type="primary" @click="setUpType">积分设置</el-button>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="setUpType">积分设置</el-button>
            <el-button type="primary" @click="handleAdd">+添加内容</el-button>
          </el-form-item>
        </el-form>
      </el-col>
        <el-table ref="multipleTable" :data="pageTableData" style="width: 100%" tooltip-effect="dark"  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="序号"></el-table-column>
          <el-table-column label="积分项" width="150">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="read" label="积分比例" width="180"></el-table-column>
          <!-- <el-table-column prop="issue" label="发布状态" width="180"></el-table-column> -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="danger" icon="el-icon-delete" @click="examine(scope.$index)"></el-button>
            </template>
          </el-table-column>
        </el-table>
       <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems">
      </el-pagination>
      <!-- 添加内容 -->
      <el-dialog title="添加内容" :visible.sync="addFormVisible" :close-on-click-modal="false">
          <el-form :model="addForm" label-width="120px" ref="addForm">
              <el-form-item label="标题" prop="name">
                  <el-input v-model="addForm.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="发布时间" prop="date">
                  <el-input v-model="addForm.date" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="阅读次数" prop="read">
                  <el-input v-model="addForm.read" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="发布状态" prop="issue">
                  <el-input v-model="addForm.issue" auto-complete="off"></el-input>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click.native="addFormVisible = false">取消</el-button>
              <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提交</el-button>
          </div>
      </el-dialog>
      <!-- 积分设置 -->
      <el-dialog title="类型" :visible.sync="setUpVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="120px" ref="addForm">
        <el-form-item label="类型" prop="card">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
          </el-cascader>
        </el-form-item> 
        <el-form-item label="数量" prop="card">
          <el-input v-model="addForm.card" auto-complete="off"></el-input>
        </el-form-item> 
      </el-form>
      <div slot="footer" class="dialog-footer setUp_footer">
        <el-button type="primary" @click.native="setUpSubmit" v-model="setUpVisible">保存</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
require("es6-promise").polyfill();
require('isomorphic-fetch');

export default {
  data(){
    return{
      // filters:{
      //   name:''
      // },
      filters:'',
      tableDataName:'',
      tableDataEnd:[],
      flag:false,
      currentPage: 1,//
      pageSize:5,
      totalItems: 0,
      addFormVisible: false,//添加内容是否显示
      setUpVisible: false,//积分界面是否显示
      addLoading: false,
      addForm:{
        name:'',
        date:'',
        read:'',
        issue:''
      },
      count : 0,
      queryCount : [],
      content:[],
      selectedOptions: [],
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
    }
  },
  created(){
    let _this = this
    fetch('../../../static/data/content.json').then(function(res){
      console.log(res)
      return res.json()
    }).then(function(stories){
      console.log(stories)
      _this.content = stories
    }).then(function(err){
      console.log(err)
    })
  },
  mounted(){
    this.totalItems = this.content.length;
    console.log(this.content)
    if(this.totalItems > this.pageSize){
      for(let index = 0; index<this.pageSize; index++){
        this.tableDataEnd.push(this.content[index])
      }
    }else{
      this.tableDataEnd = this.content;
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage)
      console.log(val)
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      //需要判断是否检索
      if(!this.flag){
        this.currentChangePage(this.tableDataEnd)
      }else{
        this.currentChangePage(this.filterTableDataEnd)
      }
    },
    currentChangePage(list,currentPage){
      let from = (this.currentPage -1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for(; from<to; from++){
        if(list[from]){
          this.tableDataEnd.push(list[from])
        }
      }
    },
    //添加页面显示
    handleAdd:function(){
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
      this.content.push(this.addForm);
      this.addFormVisible = false;
      this.totalItems = this.content.length;
    },
    examine:function(index){
      this.$confirm('确认删除该记录吗？','提示',{
        type:'warning'
      }).then(()=>{
        // console.log(index)
        console.log(this.content)
        this.content.splice(index,1)
        this.totalItems = this.content.length;
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
     handleChange(value) {
      console.log(value);
    },
    setUpType(){
      this.setUpVisible = true
    },
    setUpSubmit(){
      this.setUpVisible = false
    },
  },
  computed:{
    pageTableData(){
      let newList=[];
      let sonList=[];
      var _this = this;
      var NewItems = [];
      let pages=Math.ceil(_this.content.length/_this.pageSize);//8为每页设置数量
      for(let i=0;i<pages;i++){
      sonList=_this.content.slice(i*_this.pageSize,i*_this.pageSize+_this.pageSize);//8为每页设置数量
        newList.push(sonList)
      }
      if(_this.tableDataName !== ''){
       _this.content.map(item=>{
          if (item.name.indexOf(_this.tableDataName) != -1) {
            NewItems.push(item);
          }
        })
        _this.totalItems=NewItems.length
        return NewItems;
      }
      _this.totalItems=_this.content.length
      return newList[_this.currentPage-1];
    },
  },
}
</script>
<style scoped>
.contentn{
  width: 100%;
}
.toolbar form{
  display: flex;
}
.toolbar form .el-form-item:nth-last-child(1){
  flex: 1;
  text-align: right;
}
</style>