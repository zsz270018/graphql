// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/iconfont.css'
import './assets/iconfont.css'
import echarts from 'echarts'
import Promise from "promise-polyfill";
import AMap from 'vue-amap';
import './assets/fonts/font_940361_llssefysmoi/iconfont.css'
import 'url-search-params-polyfill'
import md5 from 'js-md5';
import $http from './axios';
// import axios from 'axios';
import store from './store';
// axios.defaults.withCredentials = true
if(!window.Promise){
  window.Promise = Promise;
}

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$http = $http;
Vue.use(ElementUI);
Vue.use(router);
Vue.use(AMap);
Vue.prototype.$md5 = md5
Vue.config.productionTip = false
AMap.initAMapApiLoader({
  key : '85d4e60dcbacd1f0da5e7ae79e241110',
  plugin: ['AMap.Geolocation']
})
Vue.use(api)
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
