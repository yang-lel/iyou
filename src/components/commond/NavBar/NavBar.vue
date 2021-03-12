<template>
  <div id="content">
    <div><slot name="left"></slot></div>
    <div><slot name="middle"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name : 'NavBar'
}
</script>

<style scoped>
#content{
  display: flex;
  height: 44px;
  width: 100%;
  background-color:  #fff;
  box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  position: fixed;
  z-index: 100;
  top: 0;

}
#content div{
  flex: 1;
}
</style>