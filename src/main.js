import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import waterfall from 'vue-waterfall2'
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'



Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueVideoPlayer)
Vue.use(waterfall)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
