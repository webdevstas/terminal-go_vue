import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import gsap from './plugins/gsap'
import router from './router'

createApp(App)
  .use(router)
  .use(store)
  .use(gsap)
  .mount('#app')
