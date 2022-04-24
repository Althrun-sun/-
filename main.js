import App from './App'


// #ifndef VUE3
import Vue from 'vue'

import basics from 'pages/basics/home.vue'
Vue.component('basics',basics)

import components from 'pages/component/home.vue'
Vue.component('components',components)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
