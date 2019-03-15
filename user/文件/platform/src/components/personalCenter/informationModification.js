import React, { Component } from 'react'
import '../../css/personalCenter/informationModification.scss'
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
class InformationModification extends Component {
  state = {
    loading: false,
  };
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
      <div className="_personal_center_personal_right_modification">
        <div className="_personal_center_personal_right_modification_left">
          <h3>个人信息修改</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
                {...formItemLayout}
                label="手机号码"
              >
                {getFieldDecorator('phone')(
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
                  </div>
                  <Input style={{ width: '100%' }} />
                </div>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="preservation">保存</Button>
            </FormItem>
          </Form>
        </div>
        <div className="_personal_center_personal_right_modification_right">
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
export default Form.create()(InformationModification)