<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index" >
        <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/commond/swiper/index'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        isLoad: false,
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
