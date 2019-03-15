import React, { Component } from 'react'
import { Pagination } from 'antd';
import '../../css/Understand/Understandcore.scss'
export default class Understandcore extends Component {
  render() {
    function onChange(pageNumber) {
      console.log(pageNumber)
    }
    return (
      <div className="_Understand_core">
        <div className="_core_nav">
          <ul>
            <li className="_core_nav_hover">公司新闻</li>
            <li>行业动态</li>
          </ul>
        </div>
        <div className="_core_content">
          <div className="_core_content_dl">
            <div className="_core_content_left">
              <img src={require("../../images/3x/分组 38.png")}/>
              <img src={require("../../images/3x/分组 37.png")}/>
              <img src={require("../../images/3x/分组 39.png")}/>
              <img src={require("../../images/3x/分组 37 copy 3.png")}/>
            </div>
            <ul className="_core_content_right">
              <li><span>万亿市场难寻“放心阿姨”互联网时代家</span></li>
              <li><span>家政技能培训促进妇女就业</span></li>
              <li><span>2018年北京市生活性服务业家政行业标</span></li>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家政困局怎么破</span></li>
              <li><span>第八届商业服务业暨育婴员、家政服务</span></li>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家政困局怎么破</span></li>
              <li><span>北京市第八届商业服务业技能大赛“育婴</span></li>
              <li><span>小程序亮相生活服务类行业，如何解决母婴家政领域的实际问题</span></li>
              <li><span>北京市生活性服务业家政行业标准规范</span></li>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家</span></li>
              <li><span>家政技能培训促进妇女就业</span></li>
              <li><span>2018年北京市生活性服务业家政行业标</span></li>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家政困局怎么破</span></li>
              <li><span>第八届商业服务业暨育婴员、家政服务</span></li>
              <li><span>协会活动</span></li>
              <li><span>北京市第八届商业服务业技能大赛“育婴</span></li>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家政困局怎么破</span></li>
              <li><span>北京市生活性服务业家政行业标准规范</span></li>
            </ul>
          </div>
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </div>
      </div>
    )
  }
  onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
}
