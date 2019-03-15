import React, { Component } from 'react'
import '../../css/Appointment/fillInAnOrder.scss'
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  Form, Input, Tooltip, Icon, Select, Button
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FillInAnOrder extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
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
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
      <div className="_fill_order">
        <h3>提交预约</h3>
        <div className="_fill_order_content">
          <Form onSubmit={this.handleSubmit}>
            <div className="ant-row ant-form-item _content_personnel">
              <label className="ant-col-sm-8 ant-form-item-label">预约家政员 : </label>
              <div className="_order_content_personnel"><span>李冬梅</span><Icon type="close" /></div>
            </div>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  真实姓名&nbsp;
                  <Tooltip title="What do you want others to call you?">
                  </Tooltip>
                </span>
              )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '请输入您的真实姓名', whitespace: true }],
              })(
                <Input style={{ width: '100%' }}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码 "
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="服务地址 "
            >
              {getFieldDecorator('服务地址')(
                <div className="_form_address">
                  <div className="_form_address_details">
                    <Select defaultValue="请选择">
                      <Option value="Sign Up">家政服务</Option>
                      <Option value="Sign In">家政服务1</Option>
                    </Select>
                    <Select defaultValue="请选择">
                      <Option value="Sign Up">家政服务</Option>
                      <Option value="Sign In">家政服务1</Option>
                    </Select>
                    <Select defaultValue="请选择">
                      <Option value="Sign Up">家政服务</Option>
                      <Option value="Sign In">家政服务1</Option>
                    </Select>
                  </div>
                  <Input style={{ width: '100%' }} />
                </div>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="雇佣工种 "
            >
              {getFieldDecorator('雇佣工种')(
                <div className="_Type_of_work">
                  <Select defaultValue="请选择">
                    <Option value="Sign Up">家政服务</Option>
                    <Option value="Sign In">家政服务1</Option>
                  </Select>
                  <span className="_Type_of_work_Tips">请选择您需要雇佣的工种。</span>
                </div>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="详细工作内容 "
            >
              {getFieldDecorator('详细工作内容')(
                <Input style={{ width: '100%' }} />
              )}
            </FormItem>
            <div className="ant-row ant-form-item _content_personnel">
              <label className="ant-col-sm-8 ant-form-item-label _label_content">详细工作内容 : </label>
              <TextArea rows={4} maxlength="200" />
              <p>请填写您的详细情况和具体需求。还可输入 200 个字。</p>
            </div>
            <FormItem {...tailFormItemLayout}>
              <NavLink to="/index/orderInformation">
                <Button type="primary" htmlType="submit">同意用户协议并提交</Button>
                <span>《顺义区家政服务行业协会用户协议》</span>
              </NavLink>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(FillInAnOrder)
// onChange={onChange} value={value}