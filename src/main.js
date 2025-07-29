import { createApp } from 'vue'
import './custom.css'
import './style.css'
import router from './router'
import App from './App.vue'

router.afterEach((to) => {
  document.title = to.meta.title || 'Donor List of Barishal'
})

createApp(App).use(router).mount('#app')
