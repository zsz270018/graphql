import React, { Component } from 'react'
import '../../css/personalCenter/orderEvaluate.scss'
import {
  Button, Input,Radio 
} from 'antd';
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";
const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;
export default class OrderEvaluate extends Component {
  constructor(){
    super()
    this.state = {
      value: 1
    }
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className="_order_evaluate">
        <h3>评价</h3>
        <div className="_order_evaluation">
          <div className="_order_evaluation_content">
            <dl>
              <dt><img src="https://images.daojia.com/crm/custom/avatar/b2223d48bc33904756a500ae5d929785.jpg.1x1.jpg?x-oss-process=image/resize,s_672/crop,w_504,h_672,g_north"/></dt>
              <dd>
                <div className="_evaluation_content_icon">
                  <p ref="psOne" onClick={this._evaluationClick.bind(this,'1')}>
                    <i></i>
                    <span>好评</span>
                  </p>
                  <p ref="psTwo" onClick={this._evaluationClick.bind(this,'2')}>
                    <i></i>
                    <span>中评</span>
                  </p>
                  <p ref="psThree" onClick={this._evaluationClick.bind(this,'3')}>
                    <i></i>
                    <span>差评</span>
                  </p>
                </div>
                <TextArea rows={8} cols={5} maxlength="200" placeholder="亲，写点评价吧，你的评价对其我们有很大帮助的。" ref="textarea" />
              </dd>
            </dl>
            <div className="_evaluation_content_single_election">
              <p>
                <span>是否穿着工装:</span>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}>否</Radio>
                </RadioGroup>
              </p>
              <p>
                <span>服务是否准时:</span>
                <RadioGroup name="radiogroup" defaultValue={1}>
                  <Radio value={1}>是</Radio>
                  <Radio value={2}>否</Radio>
                </RadioGroup>
              </p>
            </div>
          </div>
          <NavLink to="/index/commentSuccess">
            <Button type="primary" htmlType="submit" onClick={this.btnClick.bind(this)}>同意用户协议并提交</Button>
          </NavLink>
        </div>
      </div>
    )
  }
  _evaluationClick(id){
    let ps1 = this.refs.psOne,
        ps2 = this.refs.psTwo,
        ps3 = this.refs.psThree;
    if(id === '1'){
      ps1.className = '__content_icon_one'
      ps2.className = ''
      ps3.className = ''
    }else if(id === '2'){
      ps1.className = ''
      ps2.className = '__content_icon_two'
      ps3.className = ''
    }else{
      ps1.className = ''
      ps2.className = ''
      ps3.className = '__content_icon_three'
    }
  }
  btnClick(){
    console.log(this.refs.textarea)
  }
}
