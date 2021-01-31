<template>
  <div id="home">
      <nav-bar >
        <div class="nav-left" slot="left">
          <change-city/>
        </div>
        <div class="nav-middle" slot="middle">
          <tab-control :titles="['推荐','|','城市']"
                  @tabClick="tabClick"
                  ref = "tabControl2">
          </tab-control>
          </div>

          <div class="nav-right" slot="right">
            <img src="../../assets/logo.png" alt="" @click="boxClick()">
            <option-box :isShow="isShow"></option-box>
          </div>
      </nav-bar>

     <div class="content">
       {{list}}
     </div>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'

import TabControl from '../../components/content/tabControl/tabControl';
import OptionBox from '../../components/content/optionBox/OptionBox'
import ChangeCity from './childcpn/ChangeCity'

import { getRecommendData , getCityData} from '../../network/home'
export default {
  name: 'Home',
  data(){
    return {
      list : null,
      recommend : [],
      city : [],
      isShow  : false
    }
  },
  components: { 
    NavBar,
    TabControl,
    OptionBox,
    ChangeCity
  },
  methods:{
    getRecommendData(){
      getRecommendData().then(res =>{
        this.recommend = res;
        this.list = res
      })
    },
    getCityData(){
      getCityData().then(res =>{
        this.city = res;
      })
    },

    /*
    * navbar 部分方法
    */
    tabClick(index){
      index === 0 ? this.list= this.recommend : this.list = this.city
    },
    boxClick(){
      this.isShow = !this.isShow;
    }
    /*
    * 
    */
  },
  created(){
    this.getRecommendData();
    this.getCityData();
  }
}
</script>
<style scoped>
#home{
  width: 100%;
}
.nav-middle{
  /* background-color: red; */
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  /* color: rgb(74, 153, 243); */
  font-weight: bold;
  width: 101%;
}

.nav-right{
  width: 100%;
  height: 44px;
  position: relative;
}
.nav-right img{
  width: 24px;
  height: 21px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30px;
  margin: auto;
}
.nav-left{
  line-height: 44px;
}

</style>