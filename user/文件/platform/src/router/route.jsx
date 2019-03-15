import React from 'react';
import {
    Route,
    Redirect,
    Switch
}from 'react-router-dom';

export default (props)=>{
    return <Switch>{
            props.routes.map((item,index)=>{
                return <Route key={index} path={item.path} render={(location)=>{
                    if(item.children){
                        return <item.component {...location} routes={item.children}/>
                    }else{
                        return <item.component {...location}/>
                    }
                }}></Route>
            })
        }
        <Redirect to="/index/content1"></Redirect>
    </Switch>
}