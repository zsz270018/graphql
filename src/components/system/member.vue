<template>
  <div class="member">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary">会员卡设置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="setUpType">类型设置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">+ 新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="sex" label="积分项"></el-table-column>
      <el-table-column prop="phone" label="积分比例"></el-table-column>
      <el-table-column prop="site" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑页面 -->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="120px" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="editForm.sex" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="editForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="site">
          <el-input v-model="editForm.site" auto-complete="off"></el-input>
        </el-form-item>
          <el-form-item label="会员卡号" prop="card">
          <el-input v-model="editForm.card" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>
    <!-- 新增页面 -->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="120px" ref="addForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="addForm.sex" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="site">
          <el-input v-model="addForm.site" auto-complete="off"></el-input>
        </el-form-item>
          <el-form-item label="会员卡号" prop="card">
          <el-input v-model="addForm.card" auto-complete="off"></el-input>
        </el-form-item> 
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提交</el-button>
      </div>
    </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total='total'>
    </el-pagination>
    <!-- 类型设置 -->
    <el-dialog title="类型" :visible.sync="setUpVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="120px" ref="addForm">
        <el-form-item label="类型" prop="card">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
          </el-cascader>
        </el-form-item> 
        <el-form-item label="积分比例" prop="card">
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
      showFace: false,
      filters:'',
      total:0,
      currentPage:1, //初始页
      pagesize:5,
      editIndex: null,
      member:[],
      memberData:[],
      editFormVisible:false,//编辑页面是否显示
      //编辑页面数据
      editForm:{
        id:0,
        name:'',
        sex:'',
        phone:'',
        site:'',
        card:''
      },
      addFormVisible: false,//新增界面是否显示
      setUpVisible: false,//类型界面是否显示
      addLoading: false,
      addForm:{
        name:'',
        sex:'',
        phone:'',
        site:'',
        card:''
      },
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
      selectedOptions: [],
    }
  },
  created(){
    //fetch获取数据
    let _this = this
    fetch('../../../static/data/member.json').then(function(res){
      return res.json()
    }).then(function(stories){
      console.log(stories)
      _this.memberData = stories
    }).then(function(err){
      console.log(err)
    })
  },
  mounted(){
    this.total = this.memberData.length;
    if(this.total > this.pagesize){
      for(let index = 0; index<this.pagesize; index++){
        this.member.push(this.memberData[index])
      }
    }else{
      this.member = this.memberData
    }
  },
  computed:{
    list(){
      let newList=[];
      let sonList=[];
      var _this = this;
      var NewItems = [];
      let pages=Math.ceil(_this.memberData.length/_this.pagesize);//8为每页设置数量
      for(let i=0;i<pages;i++){
      sonList=_this.memberData.slice(i*_this.pagesize,i*_this.pagesize+_this.pagesize);//8为每页设置数量
        newList.push(sonList)
      }
      if(_this.filters !== ''){
      _this.memberData.map(item=>{
          if (item.name.indexOf(_this.filters) != -1) {
            NewItems.push(item);
          }
        })
        _this.total=NewItems.length
        return NewItems;
      }
      _this.total=_this.memberData.length
      return newList[_this.currentPage-1];
    },
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
          this.member.push(data[from])
        }
      }
    },
    //查询
    // getUsers(){
      
    // },
    setUpType(){
      this.setUpVisible = true
    },
    setUpSubmit(){
      this.setUpVisible = false
    },
    //新增页面显示
    handleAdd: function(){
      this.addFormVisible = true;
      this.addForm = {
        name:'',
        sex:'',
        phone:'',
        site:'',
        card:''
      }
    },
    //新增确定按钮
    addSubmit:function(){
      this.addForm = {
        name:this.addForm.name,
        sex:this.addForm.sex,
        phone:this.addForm.phone,
        site:this.addForm.site,
        card:this.addForm.card
      }
      this.memberData.push(this.addForm)
      this.addFormVisible = false;
      this.total = this.memberData.length;
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
              name:this.editForm.name,
              sex:this.editForm.sex,
              phone:this.editForm.phone,
              site:this.editForm.site,
              card:this.editForm.card
            }
            let bar = Object.assign({},this.editForm);
            this.list.splice(this.editIndex,1,bar);
            this.editFormVisible = false
          })
        }
      })
    },
    handleChange(value) {
      console.log(value);
    },
      //删除
    // deleteAdd:function (index) {
    //   this.$confirm('确认删除该记录吗？', '提示', {
    //     type: 'warning'
    //   }).then(() => {
    //     this.memberData.splice(index, 1)
    //     this.total = this.memberData.length
    //   })
    // },
  }
}
</script>
<style scoped>
  .setUp_footer{
    text-align: center;
  }
</style>
