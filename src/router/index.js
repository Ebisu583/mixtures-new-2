import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'
import Color from '@/pages/ColorPage.vue'
import MyColorsPage from '@/pages/MyColorsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/my-colors',
    name: 'My colors',
    component: MyColorsPage
  },
  {
    path: '/color/:red?/:green?/:blue?',
    name: 'Color',
    component: Color
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
