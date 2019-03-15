import React, { Component } from 'react'
import {
  Form, Input, Row, Col, Checkbox, Button,
} from 'antd';
import '../css/personal.scss'
const FormItem = Form.Item;

class Personal extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <div className="_personal_register">
        <div className="_personal_register_left">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              help="2-20个字符，可英文字母或数字及“_”、“-”组成。"
              label={(
                <span>
                  姓名&nbsp;
                </span>
              )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="短信验证码"
              help="如果您在2分钟内没有收到短信，可重新获取。多次获取验证码，以最后一次短信为准。"
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(
                    <Input  style={{ width: '100%' }}/>
                  )}
                </Col>
                <Col span={12}>
                  <Button>获取验证码</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="登录密码"
              help="6-16个字符，可由英文字母、数字及标点符号组成，区分大小写。"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password"  style={{ width: '55%' }}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
              help="请再次输入登录密码。"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur}  style={{ width: '55%' }}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="会员卡号"
              help="如果您拥有VIP会员卡，请输入会员卡号。"
            >
            <Input style={{ width: '55%' }} />
            </FormItem>
            <div className="_register_left_from">
                <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">同意用户协议并注册</Button>
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox><a href="">《顺义区家政服务行业协会用户协议》</a></Checkbox>
                )}
              </FormItem>
            </div>
          </Form>
        </div>
        <div className="_register_Scribing"></div>
        <div className="_personal_register_right">
          <h3>已经注册过用户？</h3>
          <Button type="primary">立即登录</Button>
        </div>
      </div>
    )
  }
}
export default Form.create()(Personal)