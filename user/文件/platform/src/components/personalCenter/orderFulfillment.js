import React, { Component } from 'react'
import '../../css/personalCenter/orderFulfillment.scss'
import { Icon, Pagination } from 'antd'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
export default class OrderFulfillment extends Component {
  constructor(){
    super()
    this.state = {
      classificationTab : true,
      order : true
    }
  }
  render() {
    function onChange(pageNumber) {
      console.log(pageNumber)
    }
    return (
      <div className="_order_fulfillment">
        <h3>评价订单</h3>
        <ul className="_order_classification">
          <li className={this.state.classificationTab ? '_order_classification_hover' : ''} onClick={this.classificationClick.bind(this,1)}>未完成评价订单</li>
          <li className={this.state.classificationTab ? '' : '_order_classification_hover'} onClick={this.classificationClick.bind(this,2)}>完成评价订单</li>
        </ul>
        <div className={this.state.classificationTab ? '_order_fulfillment_unfinished_evaluation_order _evaluation_order' : '_order_fulfillment_unfinished_evaluation_order'}>
          <div className={this.state.order ? '_no_order_hover' : '_unfinished_evaluation_order'}>
            <NavLink to="/index/orderEvaluate">
              <dl>
                <h4><span>2018-12-11  12:23</span><p>评价</p></h4>
                <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
                <dd>
                  <p>订单编号：146789087654321</p>
                  <p><span>王丽丽</span><span>月嫂</span></p>
                  <p>费用：12000</p>
                </dd>
              </dl>
            </NavLink>
            <NavLink to="/index/orderEvaluate">
            <dl>
              <h4><span>2018-12-11  12:23</span><p>评价</p></h4>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <p>订单编号：146789087654321</p>
                <p><span>王丽丽</span><span>月嫂</span></p>
                <p>费用：12000</p>
              </dd>
            </dl>
            </NavLink>
          </div>
          <div className={this.state.order ? '_no_order' : '_no_order_hover'} onClick={this.orderClick.bind(this)}>
            <p>您还没有订单～</p>
          </div>
        </div>
        <div className={this.state.classificationTab ? '_order_fulfillment_complete_evaluation_order' : '_order_fulfillment_complete_evaluation_order _evaluation_order'}>
          <ul className="_unfulfilled_order_content">
            <li>
              <div className="_unfulfilled_order_content_li_time">
                <p>2018-12-11  12:23</p>
                <h4>评价</h4>
              </div>
              <div className="_unfulfilled_order_content_li_content">
                <dl>
                  <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
                  <dd>
                    <p>订单编号：146789087654321</p>
                    <p><span>王丽丽</span><span>月嫂</span></p>
                    <p>费用：12000</p>
                  </dd>
                </dl>
                <div className="_unfulfilled_order_content_li_content_details">
                  形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时
                </div>
              </div>
            </li>
            <li>
              <div className="_unfulfilled_order_content_li_time">
                <p>2018-12-11  12:23</p>
                <h4>评价</h4>
              </div>
              <div className="_unfulfilled_order_content_li_content">
                <dl>
                  <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
                  <dd>
                    <p>订单编号：146789087654321</p>
                    <p><span>王丽丽</span><span>月嫂</span></p>
                    <p>费用：12000</p>
                  </dd>
                </dl>
                <div className="_unfulfilled_order_content_li_content_details">
                  形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时形象朴实,性格温和,有亲和力......
                </div>
              </div>
            </li>
            <li>
              <div className="_unfulfilled_order_content_li_time">
                <p>2018-12-11  12:23</p>
                <h4>评价</h4>
              </div>
              <div className="_unfulfilled_order_content_li_content">
                <dl>
                  <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
                  <dd>
                    <p>订单编号：146789087654321</p>
                    <p><span>王丽丽</span><span>月嫂</span></p>
                    <p>费用：12000</p>
                  </dd>
                </dl>
                <div className="_unfulfilled_order_content_li_content_details">
                  形象朴实,性格温和,有亲和力,诚实守信,尊重雇主意见,守时
                </div>
              </div>
            </li>
          </ul>
          <Pagination defaultCurrent={3} total={10} onChange={onChange} />
        </div>
      </div>
    )
  }
  classificationClick(id){
    if(id === 1){
      this.setState({
        classificationTab : true
      })
    }else{
      this.setState({
        classificationTab : false
      })
    }
  }
  orderClick(){
    this.setState({
      order : false
    })
  }
}
