import React, { Component } from 'react'
import '../../css/personalCenter/enterpriseInformationModification.scss'
import {
  Form, Input, Row, Col, Button, Select, Upload
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class EnterpriseInformationModification extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
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
    const uploadButton = (
      <div className="ant-div">
        <i></i>
        <div className="ant-upload-text">更换头像</div>
      </div>
    );
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
    const imageUrl = this.state.imageUrl;
    return (
      <div className="_enterprise_information_modification">
        <div className="_enterprise_information_modification_left">
          <h3>企业信息修改</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label='企业名称'
            >
              {getFieldDecorator('企业名称', {
                rules: [{
                  required: false, whitespace: true
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label='组织机构代码'
            >
              {getFieldDecorator('组织机构代码', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="法定代表人姓名"
              >
              {getFieldDecorator('法定代表人姓名', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
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
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="企业联系人电话"
            >
              {getFieldDecorator('phone', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="企业开户银行"
            >
              {getFieldDecorator('userName', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <div className="_form_address_details">
                  <Select defaultValue="请选择">
                    <Option value="Sign Up">家政服务</Option>
                    <Option value="Sign In">家政服务1</Option>
                </Select>
                </div>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="银行账户"
            >
              {getFieldDecorator('银行账户', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="全国连锁门店数"
            >
              {getFieldDecorator('全国连锁门店数', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="从业人员数量"
            >
              {getFieldDecorator('从业人员数量', {
                rules: [{
                  required: false
                },{
                  required: true
                }],
              })(
                <Input style={{ width: '55%' }} />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout} className="_preservation_btn">
              <Button type="primary" htmlType="submit" className="preservation">保存</Button>
            </FormItem>
          </Form>
        </div>
        <div className="_enterprise_information_modification_right">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="//jsonplaceholder.typicode.com/posts/"
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
          </Upload>
        </div>
      </div>
    )
  }
}
export default Form.create()(EnterpriseInformationModification)