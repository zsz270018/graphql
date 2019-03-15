<template>
  <div class="recruitment">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="filters.position" placeholder="请输入内容查询关键字"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="issue">
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getUsers">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="recruitment.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: 100%">
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="pay" label="薪资"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑页面 -->
    <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="120px" ref="editForm">
        <el-form-item label="职位" prop="position">
          <el-input v-model="editForm.position" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="editForm.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="editForm.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="薪资" prop="pay">
          <el-input v-model="editForm.pay" auto-complete="off"></el-input>
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
        <el-form-item label="职位" prop="position">
          <el-input v-model="addForm.position" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="addForm.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="addForm.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="薪资" prop="pay">
          <el-input v-model="addForm.pay" auto-complete="off"></el-input>
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
      :total='8'>
    </el-pagination>
  </div>
</template>
<script>
export default {
  data(){
    return{
      currentPage:1, //初始页
      pagesize:5,
      filters:{
        position:''
      },
      editIndex: null,
      editFormVisible:false,//编辑页面是否显示
      //编辑页面数据
      editForm:{
        position:'',
        type:'',
        content:'',
        pay:''
      },
      addFormVisible: false,//新增界面是否显示
      addLoading: false,
      addForm:{
       position:'',
        type:'',
        content:'',
        pay:''
      },
      recruitment:[{
        position:'月嫂',
        type:'全职',
        content:'专业护理产妇与新生儿，服务的内容以月子护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不同于一般的家政护理员。',
        pay:'500/天'
      },{
        position:'保姆保洁',
        type:'兼职',
        content:'家庭卫生的处理和打扫，在进行打扫玻璃或者窗户的时候要保证边框以及腿打轨道不能有残留的污渍，水印以及灰尘，玻璃要透明光洁，不能留下水印或者痕迹。',
        pay:'300/天'
      },{
        position:'育婴师',
        type:'全职',
        content:'(1)照顾婴幼儿。包括照顾饮食与喂哺、照料个人清洁卫生、照顾睡眠、保持婴幼儿生活环境的整洁等。 (2)和婴幼儿游戏。包括进行促进婴幼儿视觉、听觉、触觉方面的游戏，进行讲故事、念儿歌、看图书、唱歌等活动。',
        pay:'450/天'
      },{
        position:'养老陪护',
        type:'全职',
        content:'家庭卫生的处理和打扫，在进行打扫玻璃或者窗户的时候要保证边框以及腿打轨道不能有残留的污渍，水印以及灰尘，玻璃要透明光洁，不能留下水印或者痕迹。',
        pay:'400/天'
      },{
        position:'小时工',
        type:'小时工',
        content:'家庭卫生的处理和打扫，在进行打扫玻璃或者窗户的时候要保证边框以及腿打轨道不能有残留的污渍，水印以及灰尘，玻璃要透明光洁，不能留下水印或者痕迹。',
        pay:'200/天'
      },{
        position:'月嫂',
        type:'全职',
        content:'专业护理产妇与新生儿，服务的内容以月子护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不同于一般的家政护理员。',
        pay:'500/天'
      },{
        position:'月嫂',
        type:'全职',
        content:'专业护理产妇与新生儿，服务的内容以月子护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不同于一般的家政护理员。',
        pay:'500/天'
      },{
        position:'月嫂',
        type:'全职',
        content:'专业护理产妇与新生儿，服务的内容以月子护理为主，新生儿的护理占80%，产妇的护理占20%。月嫂属于高级家政人员，不同于一般的家政护理员。',
        pay:'500/天'
      }],
      search:'',
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
  methods:{
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //查询
    getUsers(){
      let arr = [];
      for(var item in this.recruitment){
        if(Object.values(this.recruitment[item]).indexOf(this.filters.position) !==-1){
          arr.push(this.recruitment[item])
        }
      }
      this.recruitment = arr
    },
    //新增页面显示
    handleAdd: function(){
      this.addFormVisible = true;
      this.addForm = {
        position:'',
        type:'',
        content:'',
        pay:''
      }
    },
    //新增确定按钮
    addSubmit:function(){
      this.addForm = {
        position:this.addForm.position,
        type:this.addForm.type,
        content:this.addForm.content,
        pay:this.addForm.pay,
      }
      this.recruitment.push(this.addForm)
      this.addFormVisible = false;
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
              position:this.editForm.position,
              type:this.editForm.type,
              content:this.editForm.content,
              pay:this.editForm.pay,
            }
            let bar = Object.assign({},this.editForm);
            this.recruitment.splice(this.editIndex,1,bar);
            this.editFormVisible = false
          })
        }
      })
    },
    //删除
    deleteAdd:function (index) {
      this.$confirm('确认删除该记录吗？', '提示', {
        type: 'warning'
      }).then(() => {
        this.recruitment.splice(index, 1)
      })
    },
    handleChange(value) {
      console.log(value);
    },
  }
}
</script>
<style scoped>
  .toolbar form{
    display: flex;
  }
  .toolbar form .el-form-item:nth-last-child(1){
    flex: 1;
    text-align: right;
  }
</style>