import React, { Component } from 'react'
import '../../css/Appointment/successfulPayment.scss'
export default class CommentSuccess extends Component {
  render() {
    return (
      <div className="_successful_payment">
        <h3><img src={require('../../images/3x/images/payment_03.gif')}></img><span>评论发表成功</span></h3>
        <p></p>
        <p>提示：点击返回到订单页面 <span>查看>></span></p>
      </div>
    )
  }
}
