<template>
  <div class="_Service_Evaluation">
    <el-form :inline="true" class="_Service_Evaluation_form">
      <div class="_Service_Evaluation_form_left">
        <el-form-item prop="date">
          <el-input placeholder="请输入内容查询关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary">删除</el-button>
      </el-form-item>
    </el-form>
    <el-table style="100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="order" label="服务对象"></el-table-column>
      <el-table-column prop="payment" label="服务人员"></el-table-column>
      <el-table-column prop="payment" label="服务名称"></el-table-column>
      <el-table-column prop="order" label="满意度"></el-table-column>
      <el-table-column prop="payment" label="评价内容"></el-table-column>
      <el-table-column prop="payment" label="时间"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
}
</script>
<style scoped>
  ._Service_Evaluation_form{
    display: flex;
    justify-content: space-between;
    margin-top: 3%;
  }
  ._Service_Evaluation_form ._Service_Evaluation_form_left{
    display: flex;
  }
  ._Service_Evaluation_form ._Service_Evaluation_form_left .el-form-item:nth-child(1){
    width: 100%;
  }
</style> 