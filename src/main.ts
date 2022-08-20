import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

const app = createApp(App)

import 'bulma/css/bulma.min.css'
import 'highlight.js/styles/tomorrow-night-bright.css';
import './styles/global.css'


app.use(createPinia())
app.use(router)
app.mount('#app')
