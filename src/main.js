import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue' //Vue 方法
import App from './App.vue' //Vue 根元件
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app') //建構 Vue 環境
