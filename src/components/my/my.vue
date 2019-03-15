<template>
  <div class="_Shopping_Order_Administration">
    <div class="_Shopping_Order_Administration_header">
      <p>全部订单（<span>60</span>）</p>
      <p>待收款（<span>12</span>）</p>
      <p>待发货（<span>12</span>）</p>
      <p>待签收（<span>12</span>）</p>
      <p>已完成（<span>100</span>）</p>
    </div>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item label="订单号" prop="date">
          <el-input v-model="filters"></el-input>
        </el-form-item>
        <el-form-item label="收货人" prop="date">
          <el-input v-model="filters"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="issue">
          <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="date">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            placeholder="全部状态"
            @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table style="100%">
      <el-table-column prop="id" label="订单号"></el-table-column>
      <el-table-column prop="order" label="下单时间"></el-table-column>
      <el-table-column prop="payment" label="收货人"></el-table-column>
      <el-table-column prop="money" label="联系电话"></el-table-column>
      <el-table-column prop="date" label="金额"></el-table-column>
      <el-table-column prop="status" label="数量"></el-table-column>
      <el-table-column prop="date" label="支付方式"></el-table-column>
      <el-table-column prop="date" label="订单状态"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      filters:'',
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
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //查询
    getUsers(){

    },
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>
<style scoped>
  ._Shopping_Order_Administration_header{
    display: flex;
    border: 1px solid rgb(163, 162, 162);
    margin: 20px 0;
    padding:10px 0;
  }
  ._Shopping_Order_Administration_header p{
    border: 1px solid rgb(163, 162, 162);
    padding: 10px 10px;
    margin: 0 10px;
  }
  .toolbar form{
    display: flex;
  }
  .toolbar form .el-form-item:nth-last-child(1){
    flex: 1;
    text-align: right;
  }
</style>
