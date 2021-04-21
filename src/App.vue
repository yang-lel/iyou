<template>

  <div id="app">
    <keep-alive exclude="Login,Details"><router-view/></keep-alive>
    <main-tab-bar v-show="(path === '/home' || path === '/shop' || path === '/plus' || path === '/message'|| path === '/profile') "></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '../src/components/commond/TabBar/MainTabBar'
import {checkUserInfo} from './network/profile'
export default {
  name : 'App',
  data(){
    return {
      path : ''
    }
  },
  components:{
    MainTabBar
  },
  mounted(){
    this.path = this.$route.path
  },
  watch:{
    $route(to,from){
      this.path = to.path
    }
  },
  methods:{
    checkUser(){
      checkUserInfo().then(res => {
        if(res.code == 200 && res.data){
          console.log(res);
          this.$store.commit('$_setUserInfo', res.data)
        }else{
          console.log(res)
        }
      })
    }
  },
  created(){
    this.checkUser()
  }
}
</script>
<style>
  @import url('../src/assets/css/init.css');
  @import url("//unpkg.com/element-ui@2.15.0/lib/theme-chalk/index.css");
  #app{
    width: 100%;
  }
</style>
