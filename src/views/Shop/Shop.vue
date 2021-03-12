<template>
  <div id="shop">
     <img src="../../assets/千库网_团队合作建设插画_元素编号12799862.png" alt="">
     <div class="text">尚未完成，敬请期待...</div>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'

export default {
  name  : 'Shop',
  components:{
    NavBar
  }
}
</script>

<style scoped>
#shop{
  height: 100vh;
  overflow: hidden;
}
img{
  margin-top: 20%;
}
.text{
  text-align: center;
  font-size: 18px;
}
</style>