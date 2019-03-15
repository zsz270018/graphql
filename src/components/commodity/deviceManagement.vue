<template>
  <div class="_device_management">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">删除</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table style="width: 100%">
      <el-table-column prop="name" label="序号"></el-table-column>
      <el-table-column prop="sex" label="类型"></el-table-column>
      <el-table-column prop="phone" label="设备编号"></el-table-column>
      <el-table-column prop="site" label="创建时间"></el-table-column>
    </el-table>
    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form label-width="120px" ref="addForm">
        <el-form-item label="类型" prop="issue">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="设备编码" prop="card">
          <el-input auto-complete="off"></el-input>
        </el-form-item> 
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提价</el-button>
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
      selectedOptions: [],
      options: [{
        value : 'zhinan',
        label : '智能腕表'
      },{
        value : 'zujian',
        label : '睡眠床垫'
      },{
        value : 'ziyuan',
        label : '智能定位卡'
      }],
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
    //新增确定按钮
    addSubmit:function(){
      this.addFormVisible = false;
    },
    //新增页面显示
    handleAdd: function(){
      this.addFormVisible = true;
    },
    handleChange(value) {
      console.log(value);
    },
  }
}
</script>
<style scoped>

</style>

