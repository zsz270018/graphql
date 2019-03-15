import React from 'react';
import Route from './router/route';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import config from './router/router.config.js';
ReactDOM.render(<Router>
    <Route routes={config.routes}></Route>   
</Router>, document.getElementById('root'));

serviceWorker.unregister();
