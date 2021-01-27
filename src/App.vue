<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '../src/components/commond/TabBar/MainTabBar'
export default {
  name : 'App',
  components:{
    MainTabBar
  }
}
</script>
<style>
  @import url('../src/assets/css/init.css');
</style>
