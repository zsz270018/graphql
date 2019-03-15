import React, { Component } from 'react'
import { Carousel, Form, Icon, Input, Button, Checkbox } from 'antd';
import Enrollment from './enrollment'
import Shopping from './shopping'
import Recruitment from './Recruitment'
import Team from './Team'
import Information from './information'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
const FormItem = Form.Item;
class HomePage extends Component {
  state = {
    tab : [{
      id : 1,
      name : '商务服务/广告/人才',
      content : [{
        id : 1,
        name : '搬家服务',
        num : 1
      },{
        id : 2,
        name : '家政服务',
        num : 1
      },{
        id : 3,
        name : '清洗/保洁服务',
        num : 1
      },{
        id : 4,
        name : '创意设计',
        num : 1
      },{
        id : 5,
        name : '广告设备',
        num : 1
      },{
        id : 6,
        name : '教育培训',
        num : 1
      },{
        id : 7,
        name : '维修/安装服务',
        num : 1
      },{
        id : 8,
        name : '物流服务',
        num : 1
      },{
        id : 9,
        name : '其他行业专业培训',
        num : 1
      },{
        id : 10,
        name : '其他商务服务',
        num : 1
      }]
    },{
      id : 2,
      name : '通信/广电设备/传媒节目',
      content : [{
        id : 1,
        name : '搬家服务1',
        num : 2
      },{
        id : 2,
        name : '家政服务2',
        num : 2
      },{
        id : 3,
        name : '清洗/保洁服务3',
        num : 2
      },{
        id : 4,
        name : '创意设计4',
        num : 2
      },{
        id : 5,
        name : '广告设备5',
        num : 2
      },{
        id : 6,
        name : '教育培训',
        num : 2
      },{
        id : 7,
        name : '维修/安装服务',
        num : 2
      },{
        id : 8,
        name : '物流服务',
        num : 2
      },{
        id : 9,
        name : '其他行业专业培训',
        num : 2
      },{
        id : 10,
        name : '其他商务服务',
        num : 2
      }]
    },{
      id : 3,
      name : '维修/安装服务',
      content : [{
        id : 1,
        name : '搬家服务3',
        num : 3
      },{
        id : 2,
        name : '家政服务4',
        num : 3
      },{
        id : 3,
        name : '清洗/保洁服务5',
        num : 3
      },{
        id : 4,
        name : '创意设计6',
        num : 3
      },{
        id : 5,
        name : '广告设备7',
        num : 3
      },{
        id : 6,
        name : '教育培训',
        num : 3
      },{
        id : 7,
        name : '维修/安装服务',
        num : 3
      },{
        id : 8,
        name : '物流服务',
        num : 3
      },{
        id : 9,
        name : '其他行业专业培训',
        num : 3
      },{
        id : 10,
        name : '其他商务服务',
        num : 3
      }]
    },{
      id : 4,
      name : '中介服务',
      content : [{
        id : 1,
        name : '搬家服务2',
        num : 4
      },{
        id : 2,
        name : '家政服务3',
        num : 4
      },{
        id : 3,
        name : '清洗/保洁服务0',
        num : 4
      },{
        id : 4,
        name : '创意设计85',
        num : 4
      },{
        id : 5,
        name : '广告设备6',
        num : 4
      },{
        id : 6,
        name : '教育培训',
        num : 4
      },{
        id : 7,
        name : '维修/安装服务',
        num : 4
      },{
        id : 8,
        name : '物流服务',
        num : 4
      },{
        id : 9,
        name : '其他行业专业培训',
        num : 4
      },{
        id : 10,
        name : '其他商务服务',
        num : 4
      }]
    },{
      id : 5,
      name : '代理',
      content : [{
        id : 1,
        name : '搬家服务5',
        num : 5
      },{
        id : 2,
        name : '家政服务6',
        num : 5
      },{
        id : 3,
        name : '清洗/保洁服务4',
        num : 5
      },{
        id : 4,
        name : '创意设计8',
        num : 5
      },{
        id : 5,
        name : '广告设备6',
        num : 5
      },{
        id : 6,
        name : '教育培训9',
        num : 5
      },{
        id : 7,
        name : '维修/安装服务3',
        num : 5
      },{
        id : 8,
        name : '物流服务',
        num : 5
      },{
        id : 9,
        name : '其他行业专业培训',
        num : 5
      },{
        id : 10,
        name : '其他商务服务',
        num : 5
      }]
    }],
    tabIndex : 1,
    tabcon : [],
    conentFlag : false,
    tabFlag : 0
  }
  render() {
    let _this = this;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="_Home_page">
        <div className="_section_tabCar">
          <div className="_tabCar_tab">
            <div className="_tab_left">
              <div className="_tab_name">产品分类</div>
              <ol className="_tab_content">
                {
                  this.state.tab.map((item,index)=>{
                    let tabStyle=item.id==this.state.tabFlag ? '_tab_flag' : '';
                    console.log(item.id,this.state.tabFlag)
                    return <li key={index} onClick={this.tabContent.bind(_this,item)}  className={tabStyle}>{item.name}</li>
                  })
                }
              </ol>
            </div>
            <div className={this.state.conentFlag ? 'tabTrue' : 'tabFalse'}>
               <div className="_tab_right">
               {
                  this.state.tabcon.map((item,index)=>{
                    return <div key={index} className="_right_div" onClick={this.conentFlagClick.bind(this)}>{item.name}</div>
                  })
                }
               </div>
              </div>
          </div>
          <Carousel autoplay>
            <div><img src={require("../images/3x/banner.png")} alt=""/></div>
            <div><img src={require("../images/3x/banner.png")} alt=""/></div>
            <div><img src={require("../images/3x/banner.png")} alt=""/></div>
            <div><img src={require("../images/3x/banner.png")} alt=""/></div>
          </Carousel>
          <div className="_section_tab_content_from">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="_from_login">帐号登录</div>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="会员账号/手机号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住我</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <a className="_from_register">立即注册</a>
              </FormItem>
            </Form>
          </div>
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
        <div className="_Broadcast">
          <span><img src={require('../images/3x/images/horn_03.gif')}/></span>
          <div className="swiper-no-swiping">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">李先生：在这个网站上找的保姆都非常靠谱，态度好，手脚也麻利。</div>
                <div className="swiper-slide">雷梅卡：表扬张红，对待老人很有耐心，不怕脏也不怕累，而且老人也很喜欢他，老人都</div>
                <div className="swiper-slide">李先生：在这个网站上找的保姆都非常靠谱，态度好，手脚也麻利。</div>
                <div className="swiper-slide">李先生：在这个网站上找的保姆都非常靠谱，态度好，手脚也麻利。</div>
              </div>
            </div>
          </div>
        </div>
        <Team/>
        <Recruitment/>
        <Enrollment/>
        <Shopping/>
        <Information/>
      </div>
    )
  }
  componentDidMount(){
    new Swiper('.swiper-container', {
      loop: true,     //循环
      autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 3000
      },
      lockSwipes : true
    });
  }
  tabContent(con){
    this.setState({
      tabcon : con.content,
      conentFlag : true,
      tabFlag : con.id
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  conentFlagClick(){
    this.setState({
      conentFlag : false,
      tabFlag : 0
    })
  }
}
export default Form.create()(HomePage)