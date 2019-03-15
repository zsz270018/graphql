import React, { Component } from 'react'
import '../../css/Appointment/orderInformation.scss'
import { Radio } from 'antd';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
const RadioGroup = Radio.Group;
export default class OrderInformation extends Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className="_order_information">
        <h3>确认订单信息</h3>
        <div className="_order_information_details">
          <ul>
            <li>
              <p>订单</p>
              <p>价格</p>
              <p>数量/时长</p>
              <p>小计（元）</p>
            </li>
            <li>
              <p>订单编号：201811271718401183709</p>
              <p>¥300.0</p>
              <p>1</p>
              <p>300.00</p>
            </li>
          </ul>
         <div className="_order_information_payment">
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>微信支付</Radio>
            <Radio value={2}>支付宝支付</Radio>
          </RadioGroup>
          <div className="_order_information_payment_code">
            <NavLink to="/index/successfulPayment">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545040694289&di=6dbcca48474f50b63fe059862d713b10&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fnews_spider%2Fdci_2013%2F09%2Fb85234c4801f8b2d7771353867a7a0f8.jpg"/>
            </NavLink>
          </div>
         </div>
        </div>
      </div>
    )
  }
}
