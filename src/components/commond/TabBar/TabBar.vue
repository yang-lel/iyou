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

<style>
  #box {
    display: flex;
    position: fixed;
    height: 49px;
    background-color: rgba(226, 247, 247, 0.753);
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 -0.5px rgba(134, 134, 134, 0.116);
  }
</style>