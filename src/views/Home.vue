<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="clickimg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      a: 1
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    clickimg(){
      console.log(this);
      console.log(this.a);
    }
  }
}
</script>
