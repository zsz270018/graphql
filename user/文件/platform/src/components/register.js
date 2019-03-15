import React, { Component } from 'react'
import '../css/register.scss'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from '../router/route'
export default class Register extends Component {
  state = {
    flag : true
  }
  render() {
    return (
        <Router>
          <div className="_register_home">
            <div className="_register_nav">
              <i></i>
              <p>顺义区生活性服务平台</p>
            </div>
            <div className="_register_content">
              <div className="_register_router">
                <NavLink to="/register/personal" onClick={this.flagClick.bind(this,'1')} className={this.state.flag ? 'flagHover' : 'colorHover'}>个人注册</NavLink>
                <NavLink to="/register/enterprise" onClick={this.flagClick.bind(this,'2')} className={this.state.flag ? 'colorHover' : 'flagHover'}>企业注册</NavLink>
              </div>
              <Route routes={this.props.routes}></Route>
            </div>
          </div>
      </Router>
    )
  }
  flagClick(index){
    if(index === '1'){
      this.setState({
        flag : true
      })
    }else{
      this.setState({
        flag : false
      })
    }
  }
}
