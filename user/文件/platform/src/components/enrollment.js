import React, { Component } from 'react'
import { Icon } from 'antd';
import '../css/Enrollment.scss'
export default class Enrollment extends Component {
  render() {
    return (
      <div className="_Training_enrollment">
        <div className="_Training_enrollment_title">
            <h3>培训招生</h3>
            <p>更多<Icon type="double-right" /></p>
          </div>
          <div className="_Training_enrollment_content">
            <dl>
              <dt><img src={require("../images/sectionImg/997793D3-A3AD-4B25-909B-F0CD629A1763 Copy 4.png")}></img></dt>
              <dd>
                <h3>母婴护理师</h3>
                <p>优惠价: <span>￥3880.00</span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src={require("../images/sectionImg/997793D3-A3AD-4B25-909B-F0CD629A1763 Copy 5.png")}></img></dt>
              <dd>
                <h3>母婴护理师</h3>
                <p>优惠价: <span>￥3880.00</span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src={require("../images/sectionImg/997793D3-A3AD-4B25-909B-F0CD629A1763 Copy 6.png")}></img></dt>
              <dd>
                <h3>母婴护理师</h3>
                <p>优惠价: <span>￥3880.00</span></p>
              </dd>
            </dl>
            <dl>
              <dt><img src={require("../images/sectionImg/997793D3-A3AD-4B25-909B-F0CD629A1763 Copy 7.png")}></img></dt>
              <dd>
                <h3>母婴护理师</h3>
                <p>优惠价: <span>￥3880.00</span></p>
              </dd>
            </dl>
          </div>
      </div>
    )
  }
}
