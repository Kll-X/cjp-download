import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//响应样式
import '@/assets/js/rem.js'
import '../public/lib/css/mmapp.css'

Vue.prototype.$EventBus = new Vue()


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
