import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// main.js中引用插件——flexible.js文件下修改配置--使用cssrem插件rootFontSize改为80
import "lib-flexible/flexible.js"

createApp(App).use(store).use(router).mount('#app')
