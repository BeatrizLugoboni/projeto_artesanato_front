import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import routes from '@/plugins/router.js'

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
