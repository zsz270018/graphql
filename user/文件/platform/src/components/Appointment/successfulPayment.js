import React, { Component } from 'react'
import '../../css/Appointment/successfulPayment.scss'
export default class SuccessfulPayment extends Component {
  render() {
    return (
      <div className="_successful_payment">
        <h3><img src={require('../../images/3x/images/payment_03.gif')}></img><span>付款成功</span></h3>
        <p>我们将在工作时间30分钟内与您联系。或者您可以直接拨打我们的客服热线：010-61426391</p>
        <p>提示：可返回“已完成订单”  <span>查看>></span></p>
      </div>
    )
  }
}
