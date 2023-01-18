import { createSSRApp } from 'vue'
import './assets/main.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const Pinia = createPinia()

createSSRApp(App).use(router).use(Pinia).mount('#app')
