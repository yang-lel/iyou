<template>
  <div class="tab-bar-item" @click="itemClick()">
      <div :style="activeStyle" align="center"><slot name = "item-icon"></slot></div> 
      <div :style="activeStyle"><slot name = "item-text"></slot></div>
      
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor:{
      type: String,
      default: '#409EFF',
    }
  },
  data() { 
    return {
        // isActive: false
    }
  },
  computed:{
    isActive(){
      return this.$route.path === this.path
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      if(this.$route.path != this.path){ 
        this.$router.push(this.path)
      }
    }
  }
 }
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>