import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

import 'bulma/css/bulma.min.css'
import 'highlight.js/styles/tomorrow-night-bright.css';
import './styles/global.css'

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
