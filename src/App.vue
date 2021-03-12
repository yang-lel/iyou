<template>

  <div id="app">
    <keep-alive exclude="Login"><router-view/></keep-alive>
    <main-tab-bar v-show="(path === '/home' || path === '/shop' || path === '/plus' || path === '/message'|| path === '/profile' ) "></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '../src/components/commond/TabBar/MainTabBar'
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
