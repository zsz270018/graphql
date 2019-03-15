import React, { Component } from 'react'
import '../../css/Appointment/InformationDetails.scss'
import { Icon, Modal, Button, Form, Input, Checkbox, } from 'antd';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
const FormItem = Form.Item;
class InformationDetails extends Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { visible, loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="_information_details">
        <div className="_information_details_top">
          <div className="_details_top_dl">
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3><span>李冬梅</span><span>发布时间: 2018-11-26  &nbsp;14:35</span></h3>
                <p><span><Icon type="check"/>身份认证</span><span><Icon type="check"/>健康认证</span><span><Icon type="check"/>保险认证</span></p>
                <ul>
                  <li>籍贯: <span>安徽省</span></li>
                  <li>求职意向：<span>家务</span></li>
                  <li>年龄：<span>52</span></li>
                  <li>服务工资: <span>¥5000</span>/月</li>
                  <li>属相: <span>蛇</span></li>
                  <li>服务形式: <span>住家</span></li>
                  <li>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></li>
                  <li>工作经验: <span>47</span>个月</li>
                </ul>
                <button><NavLink to="/index/fillInAnOrder">立即预定</NavLink></button>
              </dd>
            </dl>
          </div>
        </div>
        <div className="_information_details_bottom">
          <div className="_bottom_tab">
            <ul>
              <li className="_bottom_tab_hover">同年龄</li>
              <li>同工资</li>
              <li>同经验</li>
              <li>同籍贯</li>
              <li>最近浏览</li>
            </ul>
            <p  onClick={this.showModal}>您可能还感兴趣的家政员</p>
          </div>
          <div className="_bottom_screen">
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <h3>张红</h3>
                <p>育儿嫂</p>
                <p>从业经验: <span>12</span>个月</p>
                <p>等级: <span><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></span></p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="__information_details_bottom_elastic_frame">
          <Modal
            visible={visible}
            title="帐号登录"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer = {null}
          >
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
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleOk}>
                登录
              </Button>
              <a className="_from_register" onClick={this.handleCancel}>立即注册</a>
            </FormItem>
          </Modal>
        </div>
      </div>
    )
  }
}
export default Form.create()(InformationDetails)