import React, { Component } from 'react'
import '../css/shopping.scss'
import { Icon } from 'antd';
import img1 from '../images/sectionImg/C9373041-19A8-40FE-8D23-E4F123CB33C8 Copy.png'
import img2 from '../images/sectionImg/分组 29 copy.png'
import img3 from '../images/sectionImg/分组 30 copy.png'
import img4 from '../images/sectionImg/分组 31 copy.png'
import img5 from '../images/sectionImg/分组 32 copy.png'
export default class shopping extends Component {
  constructor(){
    super()
    this.state = {
      shoppingData : [{
        id : 1,
        img : img1,
        title : '雅德 残疾人铝合金腋下拐杖老人助行器防滑高度可调拐',
        comment : 10,
        collection : 46,
        money : 88,
        sale : 15
      },{
        id : 2,
        img : img2,
        title : '雅德 残疾人铝合金腋下拐杖老人助行器防滑高度可调拐',
        comment : 10,
        collection : 46,
        money : 88,
        sale : 15
      },{
        id : 3,
        img : img3,
        title : '雅德 残疾人铝合金腋下拐杖老人助行器防滑高度可调拐',
        comment : 10,
        collection : 46,
        money : 88,
        sale : 15
      },{
        id : 4,
        img : img4,
        title : '雅德 残疾人铝合金腋下拐杖老人助行器防滑高度可调拐',
        comment : 10,
        collection : 46,
        money : 88,
        sale : 15
      },{
        id : 5,
        img : img5,
        title : '雅德 残疾人铝合金腋下拐杖老人助行器防滑高度可调拐',
        comment : 10,
        collection : 46,
        money : 88,
        sale : 15
      }],
      shoppingIndex : 1
    }
  }
  render() {
    let _this = this;
    return (
      <div className="_Shopping_mall">
        <div className="_Shopping_mall_title">
          <h3>购物商城</h3>
          <p>更多<Icon type="double-right" /></p>
        </div>
        <div className="_Shopping_mall_main">{
          this.state.shoppingData.map((item,index)=>{
            let shoppingStyle=item.id==this.state.shoppingIndex ? '_Shopping_mall_hover _main_content_main' : '_main_content_main';
            return <dl className={shoppingStyle} key={index} onClick={this.tabCar.bind(_this,item.id)}>
              <dt><img src={item.img}/></dt>
              <dd>
                <h4>{item.title}</h4>
                <p><span>评论<strong> {item.comment}</strong></span><span>收藏<strong> {item.collection}</strong></span></p>
                <p><span><strong>￥</strong>{item.money}</span><span>月销售<strong> {item.sale}</strong>笔</span></p>
              </dd>
            </dl>
          })
        }
        </div>
      </div>
    )
  }
  tabCar(id){
    this.setState({
      shoppingIndex : id
    })
  }
}
