<template>
  <div id="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name : 'TabBar'
}
</script>

<style scoped>
#box {
    display: flex;
    position: fixed;
    width: 100%;
    height: 49px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 3px 0 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    z-index: 11;
    font-size: 13px;
  }
</style>