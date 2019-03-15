import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import HomePage from './components/homePage'
import Security from './components/security'
import Healthy from './components/healthy'
import Handle from './components/handle'
class App extends Component {
  constructor(){
    super()
    this.state = {
      linkTo : [{
        id : 1,
        name : '首页'
      },{
        id : 2,
        name : '安全预警'
      },{
        id : 3,
        name : '健康预警'
      },{
        id : 4,
        name : '预警处理'
      }]
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
            <p><span>智能</span>预警服务系统</p>
            <p>{
              this.state.linkTo.map((item,index)=>{
                console.log()
                return <Link to={item.id === 1 ? '/' : `earlyWarning${item.id}`} key={index}>{item.name}</Link>
              })
            }
            </p>
            <p>退出系统</p>
          </header>
          {/* <div style={{width:'1000px',height:"1000px"}}>
            <Map >
              <Geolocation
                      ref={(locat)=>this.mapLocation = locat}
                      {...pluginProps} />
            </Map>
          </div> */}
          <Switch>
            <Route exact={true} path="/" component={HomePage}></Route>
            <Route path="/earlyWarning2" component={Security}></Route>
            <Route path="/earlyWarning3" component={Healthy}></Route>
            <Route path="/earlyWarning4" component={Handle}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
  onClick=()=>{
    this.mapLocation.geolocation.getCurrentPosition((status,getData)=>{
       this.setState({
            flag:true,
            AddressList:getData['pois']
        });
     })
  }
}

export default App;
