import React, { Component } from 'react'
import '../css/homePage.scss'
import { Map } from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'
const pluginProps = {
  enableHighAccuracy: true,//是否使用高精度定位，默认:true
  timeout: 100,          //超过10秒后停止定位，默认：无穷大
  maximumAge: 0,           //定位结果缓存0毫秒，默认：0
  convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
  showButton: true,        //显示定位按钮，默认：true
  buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
  showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
  showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
  panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
  zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
  extensions:'all'
}
export default class HomePage extends Component {
  constructor(){
    super()
    this.state = {
      information : [{
        id : 1,
        img : 'http://img4.imgtn.bdimg.com/it/u=2050638809,3513718617&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img4.imgtn.bdimg.com/it/u=2050638809,3513718617&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 2,
        img : 'http://img4.imgtn.bdimg.com/it/u=2060192473,3983238703&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img4.imgtn.bdimg.com/it/u=2060192473,3983238703&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 3,
        img : 'http://img2.imgtn.bdimg.com/it/u=2109475629,457699691&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img2.imgtn.bdimg.com/it/u=2109475629,457699691&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 4,
        img : 'http://img0.imgtn.bdimg.com/it/u=3800199258,804510880&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img0.imgtn.bdimg.com/it/u=3800199258,804510880&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 5,
        img : 'http://img3.imgtn.bdimg.com/it/u=3243445518,1285394533&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img3.imgtn.bdimg.com/it/u=3243445518,1285394533&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 6,
        img : 'http://img0.imgtn.bdimg.com/it/u=3868246918,3129452784&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img0.imgtn.bdimg.com/it/u=3868246918,3129452784&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 7,
        img : 'http://img2.imgtn.bdimg.com/it/u=2109475629,457699691&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img2.imgtn.bdimg.com/it/u=2109475629,457699691&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      },{
        id : 8,
        img : 'http://img4.imgtn.bdimg.com/it/u=2060192473,3983238703&fm=26&gp=0.jpg',
        content : [{
          name : '李雷',
          gender : '女',
          age : '50岁',
          img : 'http://img4.imgtn.bdimg.com/it/u=2060192473,3983238703&fm=26&gp=0.jpg',
          telephone : '13124456746',
          time : '2018.11.21 08:53:00',
          longitude : 116.303337097168,
          latitude : 40.0576171875,
          address : '北京市海淀区软件园西'
        }]
      }],
      config : false,
      cont : []
    }
  }
  render() {
    return (
      <div className="_home_page">
        <div style={{width:'100%',height:"100%"}}>
          <Map>
            <Geolocation
              ref={(locat)=>this.mapLocation = locat}
              {...pluginProps} />
          </Map>
        </div>
        <div className="_home_page_information">
          <ul>
            {
              this.state.information.map((item,index)=>{
                return <li key={index} onClick={this.detailsClick.bind(this,item)}>
                <div className="_information_img">
                  <img src={item.img}/>
                </div>
                </li>
              })
            }
          </ul>
          <div ref="bubble" style={{top : this.state.topY}} className={this.state.config ? '_page_information_bubble blockConfig' : '  _page_information_bubble'}>
            <div className="information_bubble_top">
              {

              }
            </div>
            <div className="information_bubble_btm">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  detailsClick(item,e){
    this.setState({
      cont : item.content,
      topY : e.currentTarget.offsetTop,
      config : true,
    })
  }
}