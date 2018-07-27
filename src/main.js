// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/css/common.scss';
Vue.config.productionTip = false
import VueLazyLoad from 'vue-lazyload'
import animate from 'animate.css';
Vue.use(VueLazyLoad, {
  error: require('./img/无网络界面底.png'),
  loading: './img/loading.gif'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
