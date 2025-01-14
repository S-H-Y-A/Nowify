import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

import '@/styles/global/reset.scss'
import '@/styles/global/app.scss'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  keyName: 'head'
})


new Vue({
  render: h => h(App)
}).$mount('#app')
