import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";
import { Icon, AutoComplete, Button, Pagination, Modal  } from 'antd';
import '../../css/personalCenter/servicePersonnelModification.scss'
import jsonp from 'fetch-jsonp';
export default class ServicePersonnelModification extends Component {
  constructor(){
    super()
    this.state = {
      personnelData : [{
        id : 1,
        name : '张红',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 2,
        name : '张三',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 3,
        name : '李四',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 4,
        name : '王五',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 5,
        name : '孙六',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 6,
        name : '刘七',
        occupation : '育儿嫂',
        address : '北京',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 7,
        name : '候八',
        occupation : '育儿嫂',
        address : '河北',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 8,
        name : '赵九',
        occupation : '育儿嫂',
        address : '河南',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 9,
        name : '明十',
        occupation : '育儿嫂',
        address : '内蒙古自治区',
        experience : '12',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      }],
      data: [],
      arr : [],
      visible: false,
      contentId : 0
    }
  }
  render() {
    function onChange(pageNumber) {
      console.log(pageNumber)
    }
    return (
      <div className="_service_personnel_modification">
        <div className="_service_personnel_modification_head_search">
          <h3>服务人员信息修改</h3>
          <div className="_head_search">
            <AutoComplete
              style={{ width: 299}}
              size="default"
              placeholder="搜索姓名选择对应人员"
              onChange = {this.queryChange.bind(this)}
            />
            <Button type="primary" icon="search" style={{backgroundColor:'#64AB28',width:112,height:48}} onClick={this.searchClick.bind(this)}>搜索</Button>
          </div>
        </div>
        <div className="_service_personnel_modification_details">
          <div className="_service_personnel_modification_details_content">
            {
              this.state.data.map((item,index)=>{
                return <dl key={index}>
                  <NavLink to="/index/enterprisePersonalCenter/personalCenterTrainingEnrollment" className="_service_personnel_modification_details_content_dt"><dt><img src={item.img}/></dt></NavLink>
                  <dd>
                    <h3><span>{item.name}</span><span onClick={this.delete.bind(this,index)}>删除</span></h3>
                    <NavLink to="/index/enterprisePersonalCenter/personalCenterTrainingEnrollment">
                    <p>{item.occupation}</p>
                    <p>从业经验:{item.experience}个月</p>
                    <p>{item.address}</p>
                    <p><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                    </NavLink>
                  </dd>
                </dl>
              })
            }
          </div>
          <Pagination  showQuickJumper defaultCurrent={3} total={50} onChange={onChange} />
        </div>
        <Modal
          title="删除人员信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText = '确定'
          cancelText = '关闭'
        >
          <p>确定删除人员信息</p>
        </Modal>
      </div>
    )
  }
  changeInformation(e){
    this.setState({
      iptValue : e
    })
  }
  queryChange(e){
    let arr = [];
    this.state.personnelData.filter(index=>{
      if(index.name.indexOf(e)>=0 || index.occupation.indexOf(e)>=0 || index.address.indexOf(e)>=0){
        arr.push(index)
        this.setState({
          arr : arr
        })
      }
    })
  }
  searchClick(){
    this.setState({
      data : this.state.arr
    })
  }
  componentWillMount(){
    if(this.state.data.length === 0){
      this.setState({
        data : this.state.personnelData
      })
    }
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleOk = (e) => {
    this.state.data.splice(this.state.contentId,1)
    this.setState({
      visible: false,
      data : this.state.data
    })
  }
  delete(id){
    this.setState({
      visible: true,
      contentId : id
    });
  }
}