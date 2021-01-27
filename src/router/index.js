import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Map = () => import('../views/Map/Map.vue')
const Plus = () => import('../views/Plus/Plus.vue')
const Message = () => import('../views/Message/Message.vue')
const Profile = () => import('../views/Profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/map',
    component: Map
  },
  {
    path:'/plus',
    component: Plus
  },
  {
    path:'/message',
    component: Message
  },
  {
    path:'/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
