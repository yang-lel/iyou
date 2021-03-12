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
    height: 40px;
    line-height: 40px;
}
.tab-control-item{
    flex: 1;
    text-align: center;


}
.tab-control-item span{
    padding: 5px;
    font-size: 16px;
}
div .tab-control-item:nth-child(2){
    pointer-events: none;
    max-width: 16px;
}

.active{
    color: #409EFF;
    border-bottom: 3px solid #409EFF;
    
}
/* .active span{
    border-bottom: 3px solid #409EFF;
} */
</style>