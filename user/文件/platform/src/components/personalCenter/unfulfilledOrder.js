import React, { Component } from 'react'
import '../../css/personalCenter/unfulfilledOrder.scss'
import { Icon, Pagination } from 'antd'
export default class UnfulfilledOrder extends Component {
  render() {
    function onChange(pageNumber) {
      console.log(pageNumber)
    }
    return (
      <div className="_unfulfilled_order">
        <h3>评价订单</h3>
        <ul className="_unfulfilled_order_content">
          <li>
            <div className="_unfulfilled_order_content_li_time">
              <p>2018-12-11  12:23</p>
              <h4>顺义家政平台</h4>
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
              <div className="_unfulfilled_order_content_li_content_employer">
                <p>雇主：张小凡   13123345236</p>
                <p>服务时间：2018-9-20</p>
                <p>服务地址：北京市海淀区五棵松26号院3号楼502室</p>
              </div>
              <div className="_unfulfilled_order_content_li_content_details">
                服务内容：月嫂，伺候月子，看孩子，做月子餐
              </div>
            </div>
          </li>
          <li>
            <div className="_unfulfilled_order_content_li_time">
              <p>2018-12-11  12:23</p>
              <h4>顺义家政平台</h4>
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
              <div className="_unfulfilled_order_content_li_content_employer">
                <p>雇主：张小凡   13123345236</p>
                <p>服务时间：2018-9-20</p>
                <p>服务地址：北京市海淀区五棵松26号院3号楼502室</p>
              </div>
              <div className="_unfulfilled_order_content_li_content_details">
                服务内容：月嫂，伺候月子，看孩子，做月子餐
              </div>
            </div>
          </li>
          <li>
            <div className="_unfulfilled_order_content_li_time">
              <p>2018-12-11  12:23</p>
              <h4>顺义家政平台</h4>
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
              <div className="_unfulfilled_order_content_li_content_employer">
                <p>雇主：张小凡   13123345236</p>
                <p>服务时间：2018-9-20</p>
                <p>服务地址：北京市海淀区五棵松26号院3号楼502室</p>
              </div>
              <div className="_unfulfilled_order_content_li_content_details">
                服务内容：月嫂，伺候月子，看孩子，做月子餐
              </div>
            </div>
          </li>
        </ul>
        <Pagination defaultCurrent={3} total={10} onChange={onChange} />
      </div>
    )
  }
}
