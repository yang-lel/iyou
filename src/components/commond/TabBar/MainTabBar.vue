<template>
  <div class="main-tab-bar">
    <tab-bar>
  
      <tab-bar-item path="/home">
        <img slot="item-icon" src = "../../../assets/logo_n.png">
        <img slot="item-icon-active" src = "../../../assets/logo.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/map">
        <img slot="item-icon" src = "../../../assets/logo_n.png">
        <img slot="item-icon-active" src = "../../../assets/logo.png">
        <div slot="item-text">地图</div>
      </tab-bar-item>

      <tab-bar-item path="/plus" id="plus">
        <img slot="item-text" src = "../../../assets/logo.png">

      </tab-bar-item>

      <tab-bar-item path="/message">
        <img slot="item-icon" src = "../../../assets/logo_n.png">
        <img slot="item-icon-active" src = "../../../assets/logo.png">
        <div slot="item-text">消息</div>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <img slot="item-icon" src = "../../../assets/logo_n.png">
        <img slot="item-icon-active" src = "../../../assets/logo.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>

      

    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../TabBar/TabBar';
import TabBarItem from '../TabBar/TabBarItem';
export default {
  name: 'MainTabBar',
  data() { 
    return {

    }
  },
    components: {
    TabBar,
    TabBarItem
  }
 }
</script>

<style scoped>
#plus{
  height: 49px;
  position: relative;
  background-color: red;
}
#plus img{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
}
</style>