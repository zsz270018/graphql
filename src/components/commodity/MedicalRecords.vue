<template>
  <div class="_Medical_Records">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">添加</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查看</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">删除</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table style="width: 100%">
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="sex" label="文件名称"></el-table-column>
      <el-table-column prop="phone" label="类型"></el-table-column>
      <el-table-column prop="site" label="大小"></el-table-column>
       <el-table-column prop="site" label="创建时间"></el-table-column>
    </el-table>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form label-width="120px" ref="addForm">
        <el-form-item label="设备编码" prop="card">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="上传文件" prop="card">
          <el-upload
            class="upload-demo"
            drag
            :limit = '1'
            action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">点击上传</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
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
  </div>
</template>
<script>
export default {
  data(){
    return {
      currentPage:1, //初始页
      pagesize:5,
      total:0,
      addFormVisible: false,//新增界面是否显示
      addLoading: false,
      value1: '',
    }
  },
  methods : {
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
    //新增页面显示
    handleAdd: function(){
      this.addFormVisible = true;
    },
    //新增确定按钮
    addSubmit:function(){
      this.addFormVisible = false;
    },
  }
}
</script>
<style scoped>
  
</style>