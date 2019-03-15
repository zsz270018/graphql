<template>
  <div class="_Consultation_Management">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <!-- @click="handleAdd" -->
          <el-button type="primary">全部</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">未回复</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">已回复</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table style="width: 100%">
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="sex" label="时间"></el-table-column>
      <el-table-column prop="phone" label="内容"></el-table-column>
      <el-table-column prop="site" label="状态"></el-table-column>
       <el-table-column prop="site" label="操作"></el-table-column>
    </el-table>
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
  }
}
</script>
<style scoped>
  
</style>