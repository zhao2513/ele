// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import fastClick from 'fastClick'
import commonFunction from '../commonFunction/common.js'
import BScroll from 'better-scroll'
import store from './store'

Vue.config.productionTip = false

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$a=axios.create({
	baseURL:'http://localhost:8081/api'
});

let foodd=[]

Vue.prototype.$toImg=commonFunction.toImg
Vue.prototype.$toScreen=commonFunction.toScreen

fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
