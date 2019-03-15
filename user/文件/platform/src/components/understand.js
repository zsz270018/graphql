import React, { Component } from 'react'
import '../css/Understand.scss'
import { BrowserRouter as Router, NavLink, } from "react-router-dom";
import Route from '../router/route'
export default class Understand extends Component {
  constructor(){
    super()
    this.state = {
      tabCar : true
    }
  }
  render() {
    return (
      <div className="_Understand_us">
        <div className="_Understand_us_left">
          <ul>
            <NavLink to='/index/content2/survey'><li onClick={this.tabCarClick.bind(this,'1')} className={this.state.tabCar ? 'tabCar' : ''}>公司概况</li></NavLink>
            <NavLink to='/index/content2/core'><li onClick={this.tabCarClick.bind(this,'2')} className={this.state.tabCar ? '' : 'tabCar'}>新闻中心</li></NavLink>
          </ul>
        </div>
        <div className="_Understand_us_right">
          <Route routes={this.props.routes}></Route>
        </div>
      </div>
    )
  }
  tabCarClick(ind){
    if(ind === '1'){
      this.setState({
        tabCar : true
      })
    }else{
      this.setState({
        tabCar : false
      })
    }
  }
}
