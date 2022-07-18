import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入样式
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// 按需引入
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'
// mock
import '@/mock/index'
// 引入api请求接口
import API from './api/index'

const app = createApp(App)
app.use(Tabs)
app.use(Tab)
app.use(Swipe)
app.use(SwipeItem)
app.use(router)
app.mount('#app')
// 挂载
app.config.globalProperties.$http = API
