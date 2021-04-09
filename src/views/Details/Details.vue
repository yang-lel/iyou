<template>
  <div id="datails">
    <nav-bar >
        <div class="nav-left" slot="left" @click="back">
          <i class="el-icon-back"></i>
        </div>
        <div class="nav-middle" slot="middle">
          <el-avatar :src="detailsInfo.usericon"></el-avatar>
          <div class="name">{{detailsInfo.username}}</div>
          </div>
          <div class="nav-right" slot="right">
            <el-button type="warning" icon="el-icon-plus" round size="small">加关注</el-button>
          </div>  
      </nav-bar>
      <div class="box" ref="jo">
        <div style="marginTop : 44px">
    <home-swiper :banners='detailsInfo.banners'/>
      </div>
    <div class="content" @click="test()" >
      <div class="content-head">
      <h2 class="desc">{{detailsInfo.desc}}</h2>
      <div class="date">{{detailsInfo.date | showDate}}</div>
      </div>
      <div class="content-content" v-html="detailsInfo.content"></div>
      <div class="keyword" >
        <span v-for="(item , index ) in detailsInfo.keyword" :key="index">
          {{item | changeKeyword}}
        </span>
      </div>
      <div class="location"><i class="el-icon-location"></i>{{detailsInfo.location}}</div>
    <div class="advertisment">
      <details-map/>
    </div>
    </div>
    </div>
<details-tab-bar v-show="isTabBarShow"/>
<!-- <div class="title">相关推荐</div>
<list :arr="list"/> -->
  </div>

</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'
import HomeSwiper from './childcpn/Swiper'
import DetailsTabBar from './childcpn/DetailsTabBar'
import DetailsMap from './childcpn/DetailsMap'

import List from '../../components/content/list/List'

import {getDetailsData } from '../../network/details'
import {getRecommendData } from '../../network/home'
import {formatDate} from '../../common/utils'
export default {
  name : 'Details',
  data(){
    return {
      detailsInfo : {
        banners : [],
        content : ``,
        usericon : '',
        username : '',
        date : '',
        location : '',
        desc : '',
        keyword : []
      },
      isTabBarShow : true,
      p_id : this.$route.params.p_id,
      list : null,
      reFresh : true
    }
  },
   watch: {
    p_id: {
      handler(newValue, oldValue) {
        this.reFresh= false
        console.log(this.p_id);
        this.$nextTick(()=>{
          this.reFresh = true
        })
      },
      deep: true
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    DetailsTabBar,
    List,
    DetailsMap
  },
  created(){
    console.log('创建');
    this.p_id=this.$route.params.p_id
    getDetailsData(this.p_id).then(res => {
      console.log(res);
      if(res.code == 200 && res.data){
        let keyword = res.data[0].keyword.split('，')
        this.detailsInfo.banners = res.data[1].banners
        this.detailsInfo.content = res.data[0].p_content
        this.detailsInfo.username = res.data[0].username
        this.detailsInfo.usericon = res.data[0].usericon
        this.detailsInfo.desc = res.data[0].p_desc
        this.detailsInfo.keyword = keyword
        this.detailsInfo.location = res.data[0].location
        this.detailsInfo.date = res.data[0].p_date
      }
    })
    getRecommendData().then(res => {
      this.list = res
    })
    window.scrollTo(0,0)
  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods:{
    back(){
      // this.$router.go(-1);
      console.log(this.$router.go(-1));
      // this.$destroyed();
    },
    test(){
      var height = this.$refs.jo.offsetHeight;
      // console.log(height);
    },
    scrollToTop() { 
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if(scrollTop > 826){
        this.isTabBarShow = false 
      }else{
        this.isTabBarShow = true 
      }
    }
  },
  filters:{
    changeKeyword(value){
      return '#'+ value
    },
    showDate: function (value) {
      let date = new Date(value);
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  destroyed(){
    console.log('111');
  }
}
</script>

<style scoped>
#details{
  width: 100%;
}
.nav-middle{
  min-width: 130px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 4.5px;
}
div >>> .el-avatar{
  width: 35px;
  height: 35px;
}
.nav-middle .name {
  font-size: 16px;
  margin-left: 5px;
}
div /deep/ .el-button--small{
  padding: 5px 7px;
}
.el-button{
  margin-top: 10px;
  margin-left: 28%;
}
.el-icon-back{
  font-size: 24px;
  margin-top: 10px;
  margin-left: 5px;
}
.content{
  padding-bottom: 15px;
}
.content-head{
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
}
.desc{
  width: 100%;
  white-space: normal;
  text-align: left;
  font-size: 24px;
  color: #3f3f3f;
  margin-right: 30px;
}
.date {
  text-align: right;
  color: #909399;
}
.content-content{
  margin-top: 10px;
  text-indent: 2em;
  width: 90%;
  margin-left: 5%;
}
.keyword{
  color: #409EFF;
  font-size: 16px;
  width: 90%;
  margin-left: 5%;
  margin-top: 15px;
}
.keyword span {
  margin-right: 15px;
}
.content-content >>> p {
  line-height: 30px;
  font-size: 16px;
}
.location{
  width: 90%;
  margin-left: 5%;
  font-size: 16px;
  margin-top: 10px;
  color: #409EFF;
  margin-bottom: 10px;
}
.advertisment{
  height: 150px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 15px;
  margin-bottom: 50px;
}
.title{
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: spx;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .04);
  height: 40px;
  line-height: 40px;
}
</style>