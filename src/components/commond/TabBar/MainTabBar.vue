<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <div class="el-icon-s-home" slot="item-icon"></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/shop" >
        <div class="el-icon-s-shop" slot="item-icon"></div>
        <div slot="item-text">商店</div>
      </tab-bar-item>
      <tab-bar-item path="/plus" class="plus">
        <div class="el-icon-plus" slot="item-icon"></div>
      </tab-bar-item>
      <tab-bar-item path="/message" id="message">
        <div class="el-icon-chat-dot-square" slot="item-text"></div>
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <div class="el-icon-s-custom" slot="item-icon"></div>
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
.plus{
  background-color: #409EFF;
  padding-top: 8px;
}
.el-icon-chat-dot-square::before{
  font-size: 28px;
}
.el-icon-s-home::before{
  font-size: 28px;
}
.el-icon-s-custom::before{
  font-size: 28px;
}
.el-icon-s-shop::before{
  font-size: 28px;
}
.el-icon-s-opportunity::before{
  font-size: 28px;
}
.el-icon-plus::before{
  font-size: 28px;
  color: #fff;
}
</style>