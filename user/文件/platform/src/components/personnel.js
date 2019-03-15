import React, { Component } from 'react'
import '../css/Personnel.scss'
import {
  Form, Select, Upload, Icon, message, Button, Checkbox
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class Personnel extends Component {
  state = {
    loading: false,
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
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <i></i>
        <div className="ant-upload-text">点击上传</div>
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
      <div className="_personnel_information">
         <Form onSubmit={this.handleSubmit}>
          <FormItem
              {...formItemLayout}
              label="选择服务类别"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="籍贯"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="年龄"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="经验"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="学历"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="血型"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="星座"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="属相"
            >
            {(
              <Select defaultValue="请选择">
                <Option value="Sign Nanny">保姆保洁</Option>
                <Option value="Sign Month">月嫂</Option>
                <Option value="Sign Inoculation">育婴师</Option>
                <Option value="Sign Lactation">催乳师</Option>
                <Option value="Sign Hour">小时工</Option>
                <Option value="Sign Chaperone">养老陪护</Option>
              </Select>
            )}
          </FormItem>
         </Form>
         <div className="_information_Photo">
          <FormItem
              {...formItemLayout}
              label="照片"
            >
              {getFieldDecorator('照片', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
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
              )}
            </FormItem>
         </div>
         <div className="_information_btn">
          <Button type="primary">同意用户协议并注册</Button>
          <Form>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox><a href="">《顺义区家政服务行业协会用户协议》</a></Checkbox>
              )}
            </FormItem>
          </Form>
         </div>
      </div>
    )
  }
}
export default Form.create()(Personnel)