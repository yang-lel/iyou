<template>
  <div id="home">
      <nav-bar >
        <div class="nav-left" slot="left">
          <change-city @locationChange="locationChange()" />
        </div>
        <div class="nav-middle" slot="middle">
          <tab-control :titles="['推荐','|','城市']"
                  @tabClick="tabClick"
                  v-if="tabIsShow">
          </tab-control>

          <div style="color : #409EFF" v-else>首 页</div>

          </div>
          <div class="nav-right" slot="right">
          <i slot="suffix" class="el-icon-search" @click="searchClick"></i>
          </div>  
      </nav-bar>


      

      <div class="content">
        <div class="nav" @click="test" ref="nav">
          <el-card class="box-card">
            <el-row class="nav-box">
              <div class="content-box">
              <el-button type="primary" icon="el-icon-s-ticket" circle></el-button>
              <div class="nav-title">门票</div>
              </div>
              <div class="content-box">
              <el-button type="success" icon="el-icon-s-flag" circle></el-button>
              <div class="nav-title">当地游</div>
              </div>
              <div class="content-box">
              <el-button type="info" icon="el-icon-s-management" circle></el-button>
              <div class="nav-title">酒店</div>
              </div>
              <div class="content-box">
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <div class="nav-title">跟团游</div>
              </div>
              <div class="content-box">
              <el-button type="danger" icon="el-icon-s-goods" circle></el-button>
              <div class="nav-title">自由行</div>
              </div>
            </el-row>
            <el-row class="re-box-box">
              <el-card class="re-box">
                <h2>
                  精彩游记
                </h2>
                <div>
                  带你看世界
                </div>
            </el-card>
            <el-card class="re-box re-mid-box">
                <h2>
                  海岛风情
                </h2>
                <div>
                  7折优惠
                </div>
            </el-card>
            <el-card class="re-box">
                <h2>
                  防疫查询
                </h2>
                <div>
                  疫情安全出行
                </div>
            </el-card>
            
            </el-row>
          </el-card>          
        </div>
          <!-- 轮播 -->
          <el-carousel :interval="2000" type="card" height="325px">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 class="medium"></h3>
            </el-carousel-item>
          </el-carousel>
          <!-- <div class="list-title">
            游记大全
          </div> -->
          <tab-control :titles="['推荐','','城市']"
                  @tabClick="tabClick"
                  v-if="true" class="tabcontrol">
          </tab-control>
          <list class="list" @scroll="scroll" @noscroll="noscroll" :arr="list"></list>
     </div>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'
import List from '../../components/content/list/List'

import TabControl from '../../components/content/tabControl/tabControl';
import ChangeCity from './childcpn/ChangeCity'

import { getRecommendData , getCityData} from '../../network/home'
export default {
  name: 'Home',
  data(){
    return {
      list : null,
      recommend : [],
      city : [],
      isShow  : false,
      search : '',
      tabIsShow : false,
    }
  },
  components: { 
    NavBar,
    TabControl,
    ChangeCity,
    List
  },
  methods:{
    /*
    * 网络请求方法
    */
    getRecommendData(){
      getRecommendData().then(res =>{
        if(res.code == 200 && res.code){
          this.recommend = res.data;
          this.list = this.recommend
        }
        
      })
    },
    getCityData(){
      getCityData(this.$store.state.location).then(res =>{
        if(res.code == 200 && res.code){
          this.city = res.data;
        }
      })
    },

    /*
    * navbar 部分方法
    */
    tabClick(index){
      index === 0 ? this.list = this.recommend : this.list = this.city
    },
    searchClick(){
      //点击进入搜索页面
      this.$router.push('/search')
    },
    /*
    * 分类导航方法
    */
    scroll(){
      var aaa = document.getElementsByClassName('nav')[0].clientHeight
      console.log(aaa);
      var bbb = aaa+64+325+29
      window.scrollTo(0,bbb)
      this.tabIsShow = true
    },  
    noscroll(){
      // window.scrollTo(0,374)
      this.tabIsShow = false
    },
   /*
   *
   */
    test(){
      var aaa = document.getElementsByClassName('nav')[0].clientHeight
      console.log(aaa);
      window.scrollTo(0,aaa+64+325+29)
        this.tabIsShow = true
        //清空localStorage数据
        // localStorage.clear()

      console.log(localStorage.getItem("userinfo"));
    },
    /* 处理数据的方法
    */
   showlist(){
     return this.list
   },
   locationChange(){
     this.getCityData();
   }
  },
  created(){
    this.getRecommendData();
  }
}
</script>
<style scoped>
::-webkit-scrollbar  
{  
	display: none!important;
    width: 0px;  
    height: 0px;  
}
#home{
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.nav-middle{
  text-align: center;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  min-width: 130px;
}

div>>>.el-icon-plus{
  color: #409EFF;
  font-size: 30px;
  position : absolute;
  top : 7px;
  right: 10px;
}

.nav-left{
  line-height: 44px;
}

.el-icon-search::before{
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #409EFF;
}
.middle{
  font-size: 16px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-weight: bold;
}
.search{
  width: 90%;
  /* height: 30px; */
  margin-top: 5px;
  margin-left:5% ;
}


.nav{
  width: 100%;
  /* height: 200px; */
  /* background: url('../../assets/toutou.png') top no-repeat; */
  background-size: cover;
  margin-top: 54px;
  margin-bottom: 10px;
  border-radius: 5px;
}


.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
    
.el-carousel__item:nth-child(2n+1){
    background: url('../../assets/homeBanner1.jpg') top no-repeat;
    background-size: cover;
}
.el-carousel__item:last-child {
    background: url('../../assets/homeBanner2.jpg') top no-repeat;
    background-size: cover;
}
.el-carousel__item{
    background: url('../../assets/homeBanner3.jpg') top no-repeat;
    background-size: cover;
}
.list{
  margin-top: 10px;
}
.tabcontrol{
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1)
}
.el-carousel__item--card{
  width: 70%;
}
.el-carousel__item, .el-carousel__mask{
  left: -37px;
}
.box-card {
  width: 95%;
  margin-left: 2.5%;
}
.el-row{
  width: 100%;
  display: flex;
}
div>>>.el-button {
  margin-left: 0;
}
.content-box{
  flex: 1;
  text-align: center;
}
.nav-title{
  margin-top: 5px;
  color: #585858;
  font-size: 15px;
}
.el-button{
  font-size: 24px;
}
.re-box{
  width: 32%;
}
.re-mid-box{
  margin-left: 2%;
  margin-right: 2%;
}
.re-box-box{
  margin-top: 20px;
}
.re-box div{
  font-size: 14px;
  color:#909399;
}
div>>>.el-card__body{
  padding: 10px;
}
.re-box h2{
  font-weight :500;
}
.list-title{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 5%;
}
</style>

