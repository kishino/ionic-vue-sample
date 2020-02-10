import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import SplitPane from '../views/SplitPane.vue'
import Home from '../views/Home'
import Page1 from '../views/Page1'
import News from '../views/News'
import NewsDetail from '../views/NewsDetail'
import About from '../views/About'

Vue.use(IonicVueRouter)

const routes = [
  { path: '', redirect: '/home' },
  {
    path: '/',
    name: 'root',
    component: SplitPane,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/news',
        name: 'news',
        component: News
      }
    ]
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1
  },
  {
    path: '/news-detail',
    name: 'news-detail',
    component: NewsDetail
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
