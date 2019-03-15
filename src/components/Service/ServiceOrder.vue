<template>
  <div class="_service_order">
    <el-form :inline="true">
      <el-form-item label="订单编号" prop="date">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="用户姓名" prop="date">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="issue">
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认</el-button>
        <el-button type="primary">查看</el-button>
      </el-form-item>
    </el-form>
    <el-table style="100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="order" label="订单号"></el-table-column>
      <el-table-column prop="payment" label="服务名称"></el-table-column>
      <el-table-column prop="payment" label="用户姓名"></el-table-column>
      <el-table-column prop="order" label="下单时间"></el-table-column>
      <el-table-column prop="payment" label="联系电话"></el-table-column>
      <el-table-column prop="payment" label="金额"></el-table-column>
      <el-table-column prop="order" label="数量"></el-table-column>
      <el-table-column prop="payment" label="支付方式"></el-table-column>
      <el-table-column prop="payment" label="支付时间"></el-table-column>
      <el-table-column prop="order" label="订单状态"></el-table-column>
      <el-table-column prop="payment" label="操作">
        <template>
          <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
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
      selectedOptions: [],
    }
  },
  methods : {
    handleChange(value) {
      console.log(value);
    },
  }
}
</script>
<style scoped>
  form{
    margin-top: 3%;
  }
  form .el-form-item:nth-last-child(1){
    margin-left: 10%;
  }
</style>
