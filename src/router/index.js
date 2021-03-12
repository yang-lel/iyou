import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home = () => import('../views/Home/Home.vue')
const Find = () => import('../views/Find/Find.vue')
const Plus = () => import('../views/Plus/Plus.vue')
const Shop = () => import('../views/Shop/Shop.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const Message = ()=> import('../views/Message/Message.vue')
const search = ()=> import('../views/Home/childcpn/search.vue')
const Register = () => import('../views/User/register.vue')
const Login = () => import('../views/User/Login.vue')
const Details = () => import('../views/Details/Details.vue')
const ViewUser = () => import('../views/ViewUser/ViewUser.vue')
const Map = () => import('../views/Map/Map.vue')

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
    path:'/find',
    component: Find
  },
  {
    path:'/plus',
    component: Plus
  },
  {
    path:'/Shop',
    component: Shop
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/message',
    component : Message
  },
  {
    path : '/search',
    component : search
  },
  {
    path : '/register',
    component : Register

  },
  {
    path : '/login',
    component : Login
  },
  {
    path : '/details/:p_id',
    component : Details
  },
  {
    path : '/viewuser/:userid',
    component : ViewUser
  },
  {
    path : '/map',
    component : Map
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
