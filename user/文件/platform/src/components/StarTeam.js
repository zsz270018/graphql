import React, { Component } from 'react'
import '../css/starTeam.scss'
import { Icon } from 'antd'
export default class StarTeam extends Component {
  constructor(){
    super()
    this.state = {
      teamIndex : 1,
      teamTab : [{
        id : 1,
        title : '保姆保洁'
      },{
        id : 2,
        title : '月嫂'
      },{
        id : 3,
        title : '育婴师'
      },{
        id : 4,
        title : '催乳师'
      },{
        id : 5,
        title : '小时工'
      },{
        id : 6,
        title : '养老陪护'
      }],
      personnelData : [{
        id : 1,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 2,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 3,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 4,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 5,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 6,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 7,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 8,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 9,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 10,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 11,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 12,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 13,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 14,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 15,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 16,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 17,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      },{
        id : 18,
        name : '育儿嫂',
        age : 41,
        address : '内蒙古自治区',
        zodiac : '蛇',
        experience : '两年',
        img : 'https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north'
      }]
    }
  }
  render() {
    return (
      <div className="_star_team">
        <ul className="_star_team_tab">
          {
            this.state.teamTab.map((item,index)=>{
              let teamcont = item.id === this.state.teamIndex ? '_team_tab_hover' : '';
              return <li key={index} className={teamcont} onClick={this.teamClick.bind(this,item.id)}>{item.title}</li>
            })
          }
        </ul>
        <div className="_star_team_tabContent">
          {
            this.state.personnelData.map((item,index)=>{
              return  <dl>
                <dt><img src={item.img}/></dt>
                <dd>
                  <h3>{item.name}</h3>
                  <p>年龄：<span>{item.age}</span>岁</p>
                  <p>籍贯：<span>{item.address}</span></p>
                  <p>属相：<span>{item.zodiac}</span></p>
                  <p>经验：<span>{item.experience}</span></p>
                  <p>等级：<span><Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /> <Icon type="star" theme="filled" /></span></p>
                </dd>
              </dl>
            })
          }
        </div>
        <div className="_location_left">
          <div className="_left_top">
            <img src={require("../images/3x/icon_kefu.png")}></img>
          </div>
          <div className="_left_bom">
            <img src={require("../images/3x/icon_fankui.png")}></img>
          </div>
        </div>
        <div className="_location_right_QRCode">
          <img src={require("../images/3x/erweima.png")}></img>
        </div>
        <div className="_location_right_Telephone">
          <h3>电话预约</h3>
          <p>010-61426391</p>
        </div>
      </div>
    )
  }
  teamClick(id){
    this.setState({
      teamIndex : id
    })
  }
}
