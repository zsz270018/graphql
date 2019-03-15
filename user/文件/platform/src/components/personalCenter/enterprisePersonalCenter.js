import React, { Component } from 'react'
import '../../css/personalCenter/enterprisePersonalCenter.scss'
import Route from '../../router/route'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
export default class EnterprisePersonalCenter extends Component {
  constructor(){
    super()
    this.state={
      tabCar : '1'
    }
  }
  render() {
    return (
      <div className="_enterprise_personalCenter">
        <h3>个人中心</h3>
        <div className="_enterprise_personalCenter_personal">
          <ul className="_enterprise_personalCenter_personal_left">
            <NavLink to="/index/enterprisePersonalCenter/enterpriseInformationModification"><li onClick={this.tabCarClick.bind(this,'1')} className={'1' === this.state.tabCar ? '_personal_left_tab' : ''}>企业信息修改</li></NavLink>
            <NavLink to="/index/enterprisePersonalCenter/servicePersonnelModification"><li onClick={this.tabCarClick.bind(this,'2')} className={'2' === this.state.tabCar ? '_personal_left_tab' : ''}>服务人员信息修改</li></NavLink>
          </ul>
          <div className="_enterprise_personalCenter_personal_right">
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
