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
  background-color: rgba(226, 247, 247, 0.9);
  box-shadow: 0 -0.5px rgba(134, 134, 134, 0.116);

}
#content div{
  flex: 1;
}
</style>