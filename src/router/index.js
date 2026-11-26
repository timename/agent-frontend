import {createRouter, createWebHistory} from 'vue-router' //vebHashHistory是哈希模式，切换网页时不会向服务器发送请求
import MainLayout from '../layout/MainLayout.vue'
import Login from '../view/Login.vue'

const routes = [
  {
    path: '/',
    component: MainLayout
  },
  {
    path: '/login',
    component: Login
  }
]


const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router