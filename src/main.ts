import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bulma/css/bulma.min.css'

createApp(App)
.use(createPinia())
.mount('#app')
