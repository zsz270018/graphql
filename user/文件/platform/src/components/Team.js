import React, { Component } from 'react'
import { Icon, Input, Button } from 'antd';
import '../css/Team.scss'
export default class Team extends Component {
  render() {
    return (
      <div className="_Star_team">
        <div className="_Star_team_left">
            <div className="_team_left_title">
              <h3>明星团队</h3>
              <p>更多<Icon type="double-right" /></p>
            </div>
            <div className="_team_left_content">
              <dl>
                <dt><img src={require("../images/sectionImg/分组 13 copy.png")}></img></dt>
                <dd>
                  <h4>张红</h4>
                  <p>从业经验: <span>12</span>个月</p>
                  <p>育儿嫂</p>
                  <p>等级 <Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                </dd>
              </dl>
              <dl>
                <dt><img src={require("../images/sectionImg/分组 13 copy.png")}></img></dt>
                <dd>
                  <h4>张红</h4>
                  <p>从业经验: <span>12</span>个月</p>
                  <p>育儿嫂</p>
                  <p>等级 <Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                </dd>
              </dl>
              <dl>
                <dt><img src={require("../images/sectionImg/分组 13 copy.png")}></img></dt>
                <dd>
                  <h4>张红</h4>
                  <p>从业经验: <span>12</span>个月</p>
                  <p>育儿嫂</p>
                  <p>等级 <Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                </dd>
              </dl>
              <dl>
                <dt><img src={require("../images/sectionImg/分组 13 copy.png")}></img></dt>
                <dd>
                  <h4>张红</h4>
                  <p>从业经验: <span>12</span>个月</p>
                  <p>育儿嫂</p>
                  <p>等级 <Icon type="star" theme="filled" /><Icon type="star" theme="filled" /><Icon type="star" theme="filled" /></p>
                </dd>
              </dl>
            </div>
          </div>
          <div className="_Star_team_right">
            <h3>服务预约</h3>
            <div className="_Star_team_right_from">
              <Input placeholder="您的名字" />
              <Input placeholder="手机号码" />
              <div className="_right_dropdown">
                <div className="_dropdown_left"><span>北京市</span></div>
                <div className="_dropdown_right"><span>请选择</span></div>
              </div>
              <Input placeholder="手机号码" />
              <div className="_right_typeWork">
                <span>选择工种</span>
              </div>
              <Button type="primary" block>Primary</Button>
            </div>
          </div>
      </div>
    )
  }
}
