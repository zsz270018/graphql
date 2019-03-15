<template>
  <div class="_Health_Agreement">
    <el-form class="_Health_Agreement_form">
      <el-form-item label="证件类型" prop="issue">
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="handleAdd">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table style="100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="order" label="内容"></el-table-column>
      <el-table-column prop="payment" label="类型"></el-table-column>
      <el-table-column prop="payment" label="发送时间"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total='8'>
    </el-pagination>
    <!-- 新增页面 -->
    <el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form label-width="120px" ref="addForm">
        <el-form-item label="类型" prop="issue">
          <el-cascader
            :options="options1"
            v-model="selectedOptions1"
            @change="handleChange1">
          </el-cascader>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click.native="addSubmit" :loading="addLoading" v-model="addFormVisible">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
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
      options1: [{
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
      selectedOptions1: [],
      currentPage:1, //初始页
      pagesize:5,
      addFormVisible: false,//新增界面是否显示
      addLoading: false,
    }
  },
  methods : {
    handleChange(value) {
      console.log(value);
    },
    handleChange1(value) {
      console.log(value);
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleSizeChange1(val) {
      this.pagesize = val;
    },
    handleCurrentChange1(val) {
      this.currentPage = val;
    },
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
  ._Health_Agreement ._Health_Agreement_form{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  ._Health_Agreement ._Health_Agreement_form .el-form-item{
    width: 50%;
  }
  ._Health_Agreement ._Health_Agreement_form .el-form-item:nth-child(1){
    padding-left: 20px;
  }
  ._Health_Agreement ._Health_Agreement_form .el-form-item:nth-child(2){
    text-align: right;
    padding-right: 20px;
  }
</style>
