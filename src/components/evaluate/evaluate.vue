<template>
    <div class="evaluate">
        <header class="header">
            <span>评价</span>
             <button class="button" @click="handleAdd">+添加评论</button>
        </header>
        <el-table :data="evaluate.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
            <el-table-column prop="position" label="职位" width="180"></el-table-column>
            <el-table-column label="评论星级" width="180" >
              <template slot-scope="scope">
                    <el-rate
                    v-model="evaluate[scope.$index].Starred"
                    disabled
                    show-score
                    text-color="#ff9900"
                    >
                  </el-rate>
                </template>
            </el-table-column>
            <el-table-column prop="context" label="内容" width="180"></el-table-column>
            <el-table-column prop="commentator" label="评论人" width="180"></el-table-column>
            <el-table-column prop="date" label="评论时间" width="180"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 新增页面 -->
        <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
          <el-form :model="addForm" label-width="120px" ref="addForm">
            <el-form-item label="职位" prop="position">
                <el-input v-model="addForm.position" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="评论星级" prop="Starred">
                <el-input v-model="addForm.Starred" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="context">
                <el-input v-model="addForm.context" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="评论人" prop="commentator">
                <el-input v-model="addForm.commentator" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="评论时间" prop="date">
                <el-input v-model="addForm.date" auto-complete="off"></el-input>
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
          :total='5'>
        </el-pagination>
    </div>
</template>
<script>
export default {
  data(){
    return{
      addFormVisible: false,//添加内容是否显示
      addLoading: false,
      currentPage:1, //初始页
      pagesize:5,
      addForm:{
        position:'',
        Starred:'',
        context:'',
        commentator:'',
        date:''
      },
      evaluate:[{
        id:1,
        position:'育婴师',
        Starred:4,
        context:'很满意，在招聘的时候也是有所顾虑的，怕照顾不好，但是后期的时候发现当时的想法是多余的，育婴师很专业。',
        commentator:'张三',
        date:'2018-12-06 16:35:31'
      },
      {
        id:2,
        position:'养老陪护',
        Starred:2,
        context:'很满意，在招聘的时候也是有所顾虑的，怕照顾不好，但是后期的时候发现当时的想法是多余的，育婴师很专业。',
        commentator:'李四',
        date:'2018-12-06 17:03:31'
      },{
        id:3,
        position:'小时工',
        Starred:5,
        context:'很满意，在招聘的时候也是有所顾虑的，怕照顾不好，但是后期的时候发现当时的想法是多余的，育婴师很专业。',
        commentator:'王五',
        date:'2018-12-06 12:35:31'
      },{
        id:4,
        position:'月嫂',
        Starred:3,
        context:'很满意，在招聘的时候也是有所顾虑的，怕照顾不好，但是后期的时候发现当时的想法是多余的，育婴师很专业。',
        commentator:'赵六',
        date:'2018-12-07 10:35:31'
      },{
        id:5,
        position:'保姆保洁',
        Starred:4,
        context:'很满意，在招聘的时候也是有所顾虑的，怕照顾不好，但是后期的时候发现当时的想法是多余的，育婴师很专业。',
        commentator:'小吴',
        date:'2018-12-08 09:50:31'
      }]
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleAdd:function(){
      this.addFormVisible=true;
      this.addForm = {
        position:'',
        Starred:'',
        context:'',
        commentator:'',
        date:''
      }
    },
    //添加确定按钮
    addSubmit:function(){
      this.addForm = {
        position:this.addForm.position,
        Starred:this.addForm.Starred,
        context:this.addForm.context,
        commentator:this.addForm.commentator,
        date:this.addForm.date
      }
      this.evaluate.push(this.addForm);
      this.addFormVisible = false;
    },
    deleteAdd:function(index){
      this.$confirm('确认删除该记录吗？','提示',{
        type:'warning'
      }).then(()=>{
        this.evaluate.splice(index,1)
      })
    }
  }
}
</script>
<style scoped>
.evaluate{
  width: 100%;
}
.evaluate .header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #F8F8F8;
  border-bottom: 1px solid #E5E5E5;
  margin-top: 10px;
}
.evaluate .header span{
  color: #000;
  padding-left: 10px;
}
.evaluate .header .button{
  background: #51AD50;
  border: 0;
  border: 1px solid #ccc;
  outline: 0;
  height: 26px;
  border-radius: 4px;
  color: #fff;
  margin-left: 5px;
}
</style>