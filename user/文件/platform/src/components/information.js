import React, { Component } from 'react'
import '../css/information.scss'
import { Icon } from 'antd';

export default class Information extends Component {
  render() {
    return (
      <div className="_Industry_information">
        <div className="_Industry_information_title">
          <h3>行业资讯</h3>
          <p>更多<Icon type="double-right" /></p>
        </div>
        <div className="_Industry_information_content">
          <div className="_information_content">
            <div className="_information_content_title">
              <img src={require("../images/sectionImg/分组 37 copy 2.png")}/>
              <img src={require("../images/sectionImg/分组 37 copy 5.png")}/>
            </div>
            <ul>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家阿福鳄梨吧阿波罗丢了</span></li>
              <li><span>家政技能培训促进妇女就业</span></li>
              <li><span>2018年北京市生活性服务业家政行业标安徽分流安徽分了就</span></li>
              <li><span>2018年宣贯简讯</span></li>
              <li><span>第八届商业服务业暨育婴员、家政服务撒否和按费用安保法鲁</span></li>
              <li><span>协会活动</span></li>
              <li><span>北京市第八届商业服务业技能大赛“育婴安佛恩爱好日本李玉是闭嘴</span></li>
              <li><span>给妈妈最特别的礼物 ---母婴护理培训</span></li>
              <li><span>北京市生活性服务业家政行业标准规范法人保留真人版罗</span></li>
            </ul>
          </div>
          <div className="_information_content">
            <div className="_information_content_title">
              <img src={require("../images/sectionImg/分组 37 copy 4.png")}/>
              <img src={require("../images/sectionImg/分组 37 copy.png")}/>
            </div>
            <ul>
              <li><span>万亿市场难寻“放心阿姨”互联网时代家阿福鳄梨吧阿波罗丢了</span></li>
              <li><span>家政技能培训促进妇女就业</span></li>
              <li><span>2018年北京市生活性服务业家政行业标安徽分流安徽分了就</span></li>
              <li><span>2018年宣贯简讯</span></li>
              <li><span>第八届商业服务业暨育婴员、家政服务撒否和按费用安保法鲁</span></li>
              <li><span>协会活动</span></li>
              <li><span>北京市第八届商业服务业技能大赛“育婴安佛恩爱好日本李玉是闭嘴</span></li>
              <li><span>给妈妈最特别的礼物 ---母婴护理培训</span></li>
              <li><span>北京市生活性服务业家政行业标准规范法人保留真人版罗</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
