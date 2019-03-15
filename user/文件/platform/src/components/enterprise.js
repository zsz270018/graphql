import React, { Component } from 'react'
import '../css/Enterprise.scss'
import Personnel from './personnel'
import {
    Form, Input, Button,Upload
} from 'antd';
const FormItem = Form.Item;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class Enterprise extends Component {
  state={
    enterpriseTab : [{
      id : 1,
      ber : 1,
      content : '设置企业信息'
    },{
      id : 2,
      ber : 2,
      content : '填写企业证件'
    },{
      id : 3,
      ber : 3,
      content : '选择服务类别，上传人员信息'
    }],
    enterpriseIndex : 1,
    loading: false,
    loading1 : false,
    loading2 : false
  }
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
  handleChange1 = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading1: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl1 => this.setState({
        imageUrl1,
        loading1: false,
      }));
    }
  }
  handleChange2 = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading2: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl2 => this.setState({
        imageUrl2,
        loading2: false,
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
      <div>
        <i type={this.state.loading ? 'loading' : 'plus'}></i>
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    const uploadButton1 = (
      <div>
        <p>正面</p>
        <span type={this.state.loading ? 'loading' : 'plus'}></span>
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    const uploadButton2 = (
      <div>
        <p>反面</p>
        <em type={this.state.loading ? 'loading' : 'plus'}></em>
        <div className="ant-upload-text">点击上传</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div className="_enterprise_register">
        <div className="_enterprise_register_tab">
            <ul>
            {
              this.state.enterpriseTab.map((item,index)=>{
                let ind = this.state.enterpriseIndex === item.id ? '_register_active' : ''
                return <li key={index}><span className={ind}>{item.ber}</span><p>{item.content}</p></li>
              })
            }
            </ul>
        </div>
        <div className="_enterprise_register_from" ref="registerFrom">
          <div className="_enterprise_register_from_one" ref="animation">
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
                  rules: [{ required: false, whitespace: true }],
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
                  rules: [{ required: false }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="法定代表人姓名"
                >
                {getFieldDecorator('法定代表人姓名', {
                    rules: [{ required: false }],
                })(
                    <Input style={{ width: '100%' }} />
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
                  rules: [{ required: false, whitespace: true }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="企业联系人电话"
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: false, }],
                })(
                  <Input style={{ width: '100%' }} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="企业开户银行"
              >
                {getFieldDecorator('userName', {
                  rules: [{ required: false }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="银行账户"
              >
                {getFieldDecorator('银行账户', {
                  rules: [{ required: false, }],
                })(
                  <Input style={{ width: '100%' }} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="全国连锁门店数"
              >
                {getFieldDecorator('全国连锁门店数', {
                  rules: [{ required: false, }],
                })(
                  <Input style={{ width: '100%' }} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="从业人员数量"
              >
                {getFieldDecorator('从业人员数量', {
                  rules: [{ required: false }],
                })(
                  <Input style={{ width: '100%' }} />
                )}
              </FormItem>
              <Button type="primary" onClick={this.animationClick.bind(this)}>下一步</Button>
            </Form>
          </div>
          <div className="_enterprise_register_from_two" ref="register">
          <FormItem
            {...formItemLayout}
            label="上传企业营业执照"
          >
            {getFieldDecorator('上传企业营业执照', {
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

          <FormItem
            {...formItemLayout}
            label="法定代表人身份证复印件"
          >
            {getFieldDecorator('法定代表人身份证复印件', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <div className="_from_upload">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange1}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton1}
                </Upload>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader _register_from_uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange2}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton2}
                </Upload>
              </div>
            )}
          </FormItem>
          <Button type="primary" onClick={this.businessClick.bind(this)}>下一步</Button>
          </div>
          <div className="_enterprise_register_from_three" ref="fromThree">
            <Personnel/>
          </div>
        </div>

      </div>
    )
  }
  animationClick(){
    this.refs.animation.className = '_enterprise_register_from_one _enterprise_register_animationClick'
    this.setState({
      enterpriseIndex : 2
    })
    this.refs.register.className="_enterprise_register_from_two _enterprise_register_from_dis"
    this.refs.registerFrom.className = '_enterprise_register_from widthFrom'
  }
  businessClick(){
    this.refs.register.className = '_enterprise_register_from_two';
    this.refs.fromThree.className = "_enterprise_register_from_three _enterprise_register_from_dis"
    this.setState({
      enterpriseIndex : 3
    })
  }
}
export default Form.create()(Enterprise)