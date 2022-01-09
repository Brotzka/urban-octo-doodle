import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import store from './store/store'

import axios from "axios"

const axiosInstance = axios.create ({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true
})

Vue.prototype.$http = axiosInstance

Vue.config.productionTip = false

new Vue ({
  vuetify,
  router,
  store,
  render: h => h (App)
}).$mount ('#app')
