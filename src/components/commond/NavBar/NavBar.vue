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
  width: 100vw;
}
#content div{
  flex: 1;
}
</style>