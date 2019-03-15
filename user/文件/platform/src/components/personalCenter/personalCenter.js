import React, { Component } from 'react'
import '../../css/personalCenter/PersonalCenter.scss'
import Route from '../../router/route'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
export default class PersonalCenter extends Component {
  constructor(){
    super()
    this.state={
      tabCar : '1'
    }
  }
  render() {
    return (
      <div className="_personal_center">
        <h3>个人中心</h3>
        <div className="_personal_center_personal">
          <ul className="_personal_center_personal_left">
            <NavLink to="/index/personalCenter/InformationModification"><li onClick={this.tabCarClick.bind(this,'1')} className={'1' === this.state.tabCar ? '_personal_left_tab' : ''}>个人信息修改</li></NavLink>
            <NavLink to="/index/personalCenter/orderFulfillment"><li onClick={this.tabCarClick.bind(this,'2')} className={'2' === this.state.tabCar ? '_personal_left_tab' : ''}>已完成订单</li></NavLink>
            <NavLink to="/index/personalCenter/unfulfilledOrder"><li onClick={this.tabCarClick.bind(this,'3')} className={'3' === this.state.tabCar ? '_personal_left_tab' : ''}>未完成订单</li></NavLink>
          </ul>
          <div className="_personal_center_personal_right">
            <Route routes={this.props.routes}></Route>
          </div>
        </div>
      </div>
    )
  }
  tabCarClick(id){
    this.setState({
      tabCar : id
    })
  }
}
