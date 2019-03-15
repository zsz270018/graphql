import React, { Component } from 'react'
import '../css/Enterprise.scss'
import {
  Form, Input, Tooltip, Icon
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
class Enterprise extends Component {
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
    return (
      <div className="_enterprise_register">
        <div className="_enterprise_register_tab">
            <ul>
              <li><span className="_register_active">1</span><p>设置企业信息</p></li>
              <li><span>2</span><p>填写企业证件</p></li>
              <li><span>3</span><p>选择服务类别，上传人员信息</p></li>
            </ul>
        </div>
        <div className="_enterprise_register_from">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  企业名称&nbsp;
                </span>
              )}
            >
              {getFieldDecorator('企业名称', {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  组织机构代码&nbsp;
                </span>
              )}
            >
              {getFieldDecorator('组织机构代码', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              label={(
                <span>
                  法定代表人姓名&nbsp;
                </span>
              )}
              className="from_item"
            >
              {getFieldDecorator('法定代表人姓名', {
                rules: [{ required: true, message: 'Username is required!' }],
              })(<Input className="_from_ipt"/>)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  企业联系人&nbsp;
                </span>
              )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="企业联系人电话"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input style={{ width: '100%' }} />
              )}
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(Enterprise)

