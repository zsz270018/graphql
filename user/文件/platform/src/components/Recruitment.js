import React, { Component } from 'react'
import { Icon } from 'antd';
import '../css/Recruitment.scss'
export default class Recruitment extends Component {
  constructor(){
    super()
    this.state = {
      recruitment : [{
        id :1,
        name : '育儿嫂',
        address : '顺义区高丽营金马工业区',
        salary : '面议'
      },{
        id :2,
        name : '育儿兼家务',
        address : '顺义区高丽营金马工业区',
        salary : '2200'
      },{
        id :3,
        name : '月嫂',
        address : '顺义区高丽营金马工业区',
        salary : '14000'
      },{
        id :4,
        name : '育儿嫂',
        address : '顺义区高丽营金马工业区',
        salary : '5900'
      },{
        id :5,
        name : '保姆',
        address : '顺义区高丽营金马工业区',
        salary : '面议'
      }],
      recruitmentIndex : 1
    }
  }
  render() {
    let _this = this;
    return (
      <div className="_Enterprise_recruitment">
        <div className="_Enterprise_recruitment_title">
          <h3>企业招聘</h3>
          <p>更多<Icon type="double-right" /></p>
        </div>
        <div className="_Enterprise_recruitment_main">{
          this.state.recruitment.map((item,index)=>{
            let recruitmentStyle=item.id==this.state.recruitmentIndex ? '_main_content _main_content_main' : '_main_content';
            return <div className={recruitmentStyle} key={index} onClick={this.tabCar.bind(_this,item.id)}>
            <h3>{item.name}</h3>
            <p>{item.address}</p>
            <p>可接受工资: <span>{item.salary}</span></p>
            <p><span><Icon type="file-search" />查看</span> <span><Icon type="heart" />收藏</span></p>
          </div>
          })
        }
        </div>
      </div>
    )
  }
  tabCar(id){
    this.setState({
      recruitmentIndex : id
    })
  }
}
