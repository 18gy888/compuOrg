import Vue from 'vue'
import App from './App.vue'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import VueRouter from 'vue-router'




import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

import vueCropper from 'vue-cropper' // 截图插件
Vue.use(vueCropper)

Vue.use(iView) //使用iview组件 
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {
    path: '/', 
    redirect: '/login'
    //redirect: '/test'
  },
  {
    path: "/index",
    component: () => import("./page/index.vue")
  },
  {
    path: "/login",
    component: () => import("./page/login.vue")
  },
  {
    path: "/experiment1",
    component: () => import("./page/experiment1.vue")
  },
  {
    path: "/experiment1.2",
    component: () => import("./page/experiment1.2.vue")
  },
  {
    path: "/PrtScr",
    component: () => import("./page/PrtScr.vue")
  },
  // {
  //   path: "/test",
  //   component: () => import("./page/test.vue")
  // }
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
