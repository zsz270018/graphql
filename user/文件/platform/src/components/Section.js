import React, { Component } from 'react'
import '../css/Header.scss'
import '../css/Section.scss'
import '../css/Footer.scss'
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";
import { Input, Select, AutoComplete, Button  } from 'antd';
import Route from '../router/route'
const InputGroup = Input.Group;
const Option = Select.Option;
class Section extends Component {
  constructor(){
    super()
    this.state = {
      nav : [{
        id : 1,
        name : '首页'
      },{
        id : 2,
        name : '了解我们'
      },{
        id : 3,
        name : '服务预约'
      },{
        id : 4,
        name : '明星团队'
      },{
        id : 5,
        name : '服务评价'
      },{
        id : 6,
        name : '培训招生'
      },{
        id : 7,
        name : '居家健康'
      },{
        id : 8,
        name : '购物商城'
      }],
      currentIndex : 1,
      centerFlag : false
    }
  }
  render() {
    let _this = this;
    return (
      <div className="PageBox">
        <div className="header">
          <div className="header_icon">
            <span></span>
            <p>顺义区生活性服务平台</p>
          </div>
          <div className="_header_from">
            <InputGroup compact>
              <Select defaultValue="Sign Up">
                <Option value="Sign Up">家政服务</Option>
                <Option value="Sign In">家政服务1</Option>
              </Select>
              <AutoComplete
                style={{ width: 300}}
                size="default"
                placeholder="保姆 家政人员 月嫂 保洁 维修"
              />
              <Button type="primary" icon="search" style={{backgroundColor:'#64AB28',width:112}}>搜索</Button>
            </InputGroup>
          </div>
          <div className="_header_login">
            <div className="_header_login_click">
               <NavLink to="/register/personal"><p>注册</p></NavLink>
              <p>登录</p>
            </div>
            <div className="_header_personal_center">
              <div className="_header_login_img" onClick={this.centerClick.bind(this)}>
                <img src="http://img4.imgtn.bdimg.com/it/u=3868410791,3959511573&fm=26&gp=0.jpg"/>
              </div>
              <div className={this.state.centerFlag ? '_header_personal_center_drapDown _center_drapDown_block' : '_header_personal_center_drapDown'}>
                <NavLink to="/index/personalCenter/InformationModification">
                  <span>个人中心(个人端)</span>
                </NavLink>
                <NavLink to="/index/enterprisePersonalCenter/enterpriseInformationModification">
                  <span>个人中心(企业端)</span>
                </NavLink>
                <span>设置</span>
              </div>
            </div>
          </div>
        </div>
        <div className="_section">
          <ul className="_section_nav">
            {
              this.state.nav.map((item,index)=>{
                let tabStyle=item.id==this.state.currentIndex ? 'hover _nav_li' : '_nav_li';
                return <NavLink  to={item.id === 2 ? '/index/content2/survey' : `/index/content${item.id}`}  key={index}><li onClick={this.tabCar.bind(_this,item.id)}  className={tabStyle}>{item.name}</li></NavLink>
              })
            }
          </ul>
          <Route routes={this.props.routes}></Route>
        </div>
        <div className="_footer">
          <p>Copyright © 2013-2018 北京嘉乐会家政服务有限公司 版权所有</p>
          <p>办公地址：顺义区站前东街天地悦港城C座704室</p>
          <p>网址：http://syjzxh.com.cn/</p>
        </div>
      </div>
    )
  }
  tabCar(id){
    this.setState({
      currentIndex : id
    })
  }
  centerClick(){
    this.setState({
      centerFlag : !this.state.centerFlag
    })
  }
}
export default withRouter(Section);