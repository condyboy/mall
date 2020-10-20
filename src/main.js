import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/Toast'
import fastClick from 'fastclick'
import lazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$store=store
//安装插件会执行install方法
Vue.use(Toast)
//使用图片懒加载
Vue.use(lazyload)
Vue.prototype.$bus= new Vue()
fastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
