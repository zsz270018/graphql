import React, { Component } from 'react'
import '../css/Appointment.scss'
import { Icon, Pagination } from 'antd'
import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
class Appointment extends Component {
  constructor(){
    super()
    this.state = {
      iFlag : false,
      More_rotate : false,
      personnelData : [{
        id : 1,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 2,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 3,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 4,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 5,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 6,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 7,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 8,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 9,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      }]
    }
  }
  render() {
    function onChange(pageNumber) {
      console.log(pageNumber)
    }
    return (
      <div className="_service_appointment">
        <div className="_appointment_header_title">
          <h3>选人流程</h3>
          <ul>
            <li><i></i><span>1.选择满意的家政人员</span></li>
            <li><i></i><span>2.在线支付费用</span></li>
            <li><i></i><span>3.家政人员订单完成</span></li>
          </ul>
        </div>
        <div className="_appointment_More">
          <ul>
            <li>
              <p>类型: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>家务</p>
                <p>育婴</p>
                <p>育儿</p>
                <p>小时工</p>
                <p>居家养老</p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>服务工资: <span>不限</span></p>
              <div className={this.state.More_rotate ? '_appointment_More_div _appointment_More_hover' : '_appointment_More_div'}>
                <p>1000-1999</p>
                <p>2000-2999</p>
                <p>3000-3999</p>
                <p>4000-4999</p>
                <p>5000-5999</p>
                <p>6000-6999</p>
                <p>7000-7999</p>
                <p>8000-8999</p>
                <p>9000-9999</p>
                <p>10000-11999</p>
                <p>11000-11999</p>
                <p>12000-13999</p>
                <p>14000-15999</p>
                <p>16000-17999</p>
                <p>18000-19999</p>
              </div>
              <p onClick={this.drapDown.bind(this)}><Icon type="caret-down" className={this.state.iFlag ? '_appointment_More_rotate' : ''} /> 更多</p>
            </li>
            <li>
              <p>年龄: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>19-20岁</p>
                <p>20-25岁</p>
                <p>25-30岁</p>
                <p>30-35岁</p>
                <p>35-40岁</p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>等级: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p><Icon type="star" theme="filled" /></p>
                <p><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                <p><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                <p><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                <p><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>籍贯: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>上海市</p>
                <p>云南省</p>
                <p>辽宁省</p>
                <p>内蒙古自治区</p>
                <p>北京</p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>血型: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>A型</p>
                <p>B型</p>
                <p>AB型</p>
                <p>O型</p>
              </div>
              <p></p>
            </li>
            <li>
              <p>属相: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>鼠</p>
                <p>牛</p>
                <p>虎</p>
                <p>兔</p>
                <p>龙</p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>学历: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>小学</p>
                <p>初中</p>
                <p>高中</p>
                <p>中专</p>
                <p>大专以上</p>
              </div>
              <p></p>
            </li>
            <li>
              <p>星座: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>白羊座</p>
                <p>金牛座</p>
                <p>射手座</p>
                <p>天蝎座</p>
                <p>水瓶座</p>
              </div>
              <p><Icon type="caret-down" /> 更多</p>
            </li>
            <li>
              <p>从业年限: <span>不限</span></p>
              <div className="_appointment_More_div">
                <p>0-1年</p>
                <p>1-3年</p>
                <p>3-6年</p>
                <p>6-9年</p>
                <p>9-12年</p>
              </div>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="_location_left">
          <div className="_left_top">
            <img src={require("../images/3x/icon_kefu.png")}></img>
          </div>
          <div className="_left_bom">
            <img src={require("../images/3x/icon_fankui.png")}></img>
          </div>
        </div>
        <div className="_location_right_QRCode">
          <img src={require("../images/3x/erweima.png")}></img>
        </div>
        <div className="_location_right_Telephone">
          <h3>电话预约</h3>
          <p>010-61426391</p>
        </div>
        <div className="_appointment_Deposit_information">
          <div className="_Deposit_information">
          {
            this.state.personnelData.map((item,index)=>{
              return  <NavLink to={`/index/informationDetails/${item.id}`}  key={index}>
                <dl>
                  <dt><img src={item.img}/></dt>
                  <dd>
                    <h3>{item.name}</h3>
                    <p>年龄：<span>{item.age}</span>岁</p>
                    <p>籍贯：<span>{item.address}</span></p>
                    <p>属相：<span>{item.zodiac}</span></p>
                    <p>经验：<span>{item.experience}</span></p>
                    <p>等级：<span><Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /></span></p>
                  </dd>
                </dl>
              </NavLink>
            })
          }
          </div>
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </div>
      </div>
    )
  }
  drapDown(){
    console.log(11)
    this.setState({
      iFlag : !this.state.iFlag,
      More_rotate : !this.state.More_rotate
    })
  }
}
export default withRouter(Appointment)