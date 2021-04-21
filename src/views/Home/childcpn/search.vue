<template>
  <div id="search">
    <div class="search-head">
      <span @click="backHome" class="el-icon-arrow-left"></span>
     <el-input
    placeholder="请输入内容"
    v-model="search" class="search" size="small" @input="getSearchData(search)">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </el-input>
  </div>

  <div class="hot-search" v-if="search===''">
    <div>热门搜索</div>
    <ol>
      <li v-for="(item,index) in hotSearch" @click="clickHot(item)" :key="index">{{item}}</li>
    </ol>
  </div>

  <div v-else>
    <div v-if=" arr == null" class="no-search">
      <img src="../../../assets/千库网_暂无数据_元素编号12786190.png" alt="">
      暂无相关信息，换个关键词试试
    </div>
    <div v-else class="search-content">
      <div v-for="(item,index) in arr" :key="index" class="aaa">
      <div class="item" >
        <el-avatar :src="item.userinfo.usericon"></el-avatar>
        <div style="height : 40px; flex-flow: column; display:flex; margin-left:10px">
          <div class="name">{{item.userinfo.username}}</div>
          <div class="date">{{item.p_date | showDate}}</div>
        </div>
      </div>
      <div class="item-desc">{{item.p_desc}}</div>
        <img class="item_img" v-if="item.p_image" :src="item.p_image" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {getSearchData} from '../../../network/home'
import {formatDate} from '../../../common/utils'
export default {
  name : 'search',
  data(){
    return {
      search : '',
      hotSearch :['上海','成都网红店打卡','成都网红店打卡','成都网红店打卡','成都网红店打卡',
      '成都网红店打卡','成都网红店打卡','成都网红店打卡','成都网红店打卡','成都网红店打卡'],
      // arr : '',
      arr : []
    }
  },
  methods:{
    backHome(){
      this.$router.go(-1)
    },
    clickHot(val){
      this.search = val
      getSearchData(this.search).then(res =>{
        console.log(res);
        this.arr = res.data.data
      })
    },
    //封装网络请求的方法
    //每次知道input change后，直接调用
    getSearchData(search){
      console.log(1);
      getSearchData(search).then(res =>{
        console.log(res);
        this.arr = res.data.data
      })
    }
  },
  filters:{
    showDate: function (value) {
          let date = new Date(value*1000);
          return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
        }
  },
  deactivated(){
    this.$destroy();
    // console.log('组件已销毁');
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
#search{
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.search{
  width: 90%;
  /* height: 30px; */
  margin-top: 5px;
  vertical-align:top;
}
.search-head{
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
}
.el-icon-arrow-left::before{
  font-size: 24px;
  display: block;
  margin-top: 8px;

}

div /deep/ .el-input__inner{
  border-radius:  30px;
}
.hot-search{
  margin-top: 50px;
}
.hot-search div{
  margin-bottom: 10px;
  margin-left: 3%;
}
.hot-search ol{
  width: 90%;
  margin-left: 5%;
  display: flex;  
  flex-wrap: wrap;
  justify-content: space-around;
}
.hot-search ol li{
  width: 40%;
  list-style-type:decimal;
  height: 30px;
  color: red;
}
.no-search{
  text-align: center;
  color: #909399;
  margin-top: 80px;
}
.no-search img{
  width: 60%;
  height: 60%;
  margin-left: 20%;
}
.search-content{
  margin-top: 50px;
  height: calc(100%-37px);
}
.item{

  display: flex;
  flex-wrap: wrap;
}
.date{
  font-size: 14px;
  color: #909399;
}
.item-desc{
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  text-indent: 2em;
}
.item_img{
  width: 100%;
  height: 300px;
  border-radius: 5px;
}
.aaa{
  width: 95%;
  margin-left: 2.5%;
  padding: 10px;
  border-bottom: 1px solid #e9e9eb;  
}
</style>