<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles"
       :key="(item,index)" class="tab-control-item"
       :class="{active: index===currentIndex}"
       @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
      titles:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  data() { 
    return {
        currentIndex:0,
    }
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
          this.$emit('tabClick', index);
      }
  }
 }
</script>

<style scoped>
.tab-control{
    display: flex;
    /* text-align: center; */
    /* font-size: 60px; */
    height: 40px;
    line-height: 40px;
    background-color: rgba(226, 247, 247, 0.9);
    box-shadow: 0 -0.5px rgba(134, 134, 134, 0.116);
}
.tab-control-item{
    flex: 1;

}
.tab-control-item span{
    padding: 5px;
    font-size: 16px;
}
.tab-control-item:nth-child(2){
pointer-events: none;
}

.active{
    color: #ff5777;
    
}
.active span{
    border-bottom: 3px solid #ff5777;
}
</style>