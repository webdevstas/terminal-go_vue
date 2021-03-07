import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import gsap from './plugins/gsap'

createApp(App)
  .use(store)
  .use(gsap)
  .mount('#app')
