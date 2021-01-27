<template>
  <div id="option-box" v-if="isShow">
    <ul>
      <li><span><img src="../../../assets/logo.png" alt=""></span> <span class="text">扫一扫</span></li>
            <li><span><img src="../../../assets/logo.png" alt=""></span> <span class="text">扫一扫</span></li>
            <li><span><img src="../../../assets/logo.png" alt=""></span> <span class="text">扫一扫</span></li>
            <li><span><img src="../../../assets/logo.png" alt=""></span> <span class="text">扫一扫</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'OptionBox',
  props:{
    isShow :{
      type : Boolean,
      default : false
    }
  },
  data(){
    return {
     
    }
  }
}
</script>
<style scoped>
#option-box{
  position: fixed;
  right: 5px;
  top: 45px;
  background-color:red;
  color: #fff;
  padding: 5px;
  border-radius: 8px;
}

ul li span img {
  width: 18px;
  height: 16px;
  vertical-align:middle;
  display: inline-block;
}


ul li{
  display: flex;
  width: 80px;
  height: 40px;
  margin-bottom: 5px;
}

ul li .text {
  flex: 1;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>