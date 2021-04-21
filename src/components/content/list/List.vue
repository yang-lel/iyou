<template>
<div>
    <div class="container-water-fall" v-if="list.data && list.data.length !=undefined">
    <waterfall :col='2'  :data="list.data"  @loadmore="loadmore" @scroll="scroll" height="100%">
        <div class="cell-item" v-for="(item,index) in list.data" :key="index" @click="itemClick(item.p_id)">
          <img v-if="item.p_image" :src="item.p_image"/>
          <div class="item-body">
              <div class="item-desc">{{item.p_desc}}</div>
              <div class="item-footer">
                  <div class="avatar" :style="{ backgroundImage : `url(${item.userinfo.usericon})` }"></div>
                    <div style="height : 40px;flex-flow: column;display:flex;">
                      <div class="name">{{item.userinfo.username | showName }}</div>
                      <div class="date">{{item.p_date | showDate}}</div>
                    </div>
                  <div class="like" :class="item.liked?'active':''" >
                      <img src="../../../assets/dianzan.svg" alt="">
                      <div class="like-total">{{item.liked}}</div>  
                  </div>
              </div>
          </div>
        </div>
    </waterfall>
  </div>
  <div class="no_data" v-else>
    <img src="../../../assets/no_data.png" alt="">
    <div>该城市暂无数据~</div>
  </div>
</div>
</template>


<script>
import {formatDate} from '../../../common/utils'
export default {
  name : 'List',
  data(){
    return {
      reFresh : true
    }
  },
  props:{
    list : {
      type : Object,
      default(){
        return {}
      }
    }
  },
   watch: {
    list: {
      handler(newValue, oldValue) {
        this.reFresh= false
        this.$nextTick(()=>{
          this.reFresh = true
        })
      },
      deep: true
    }
  },
  methods:{
    scroll(scrollData){
      // if(scrollData.scrollTop > 0){
      //   // this.$emit('scroll',scrollData.scrollTop)
      // }
    },
    switchCol(col){
          this.col = col
          console.log(this.col)
    },
    loadmore(){
      console.log(111);
      this.list.data = this.list.data.concat(this.list.data)
    },
    itemClick(id){
      this.$router.push('/details/' + id)
    }
  },
  filters:{
        showName(value){
          if(value > 5){
            return value.substring(0,4) + "..."
          }else{
            return value
          }
        },
        showDate: function (value) {
          let date = new Date(value*1000);
          return formatDate(date, 'yyyy-MM-dd hh:mm')
        }
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
.cell-item{
    margin-bottom: 10px;
    height: auto;
}
.container-water-fall{
  margin-bottom: 50px;
  height: calc(100vh - 93px);
  /* background-color: red; */
  overflow: hidden;
}
.container-water-fall .cell-item{
    width: 100%;
    background: #fff;
    border: 2px solid #f0f0f0;
    border-radius: 12px;
    overflow: hidden;
    box-sizing: border-box;
}

.container-water-fall .cell-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px 12px 5px 5px;
}

.container-water-fall .cell-item .item-body .item-desc {
    font-size: 15px;
    color: #333;
    line-height: 20px;
    font-weight:bold ; 
    width: 100%;
    height: 20px;
    overflow: hidden;
    word-break:break-all;
}
.container-water-fall .cell-item .item-body .item-footer .name{
    font-size: 14px;
    color: #999;
    margin-left: 5px;
    max-width: 80px;
    flex: 1;
}

.container-water-fall .cell-item .item-body .item-footer .date{
    font-size: 12px;
    color: #999;
    flex: 1;
		margin-left: 5px;
}

.container-water-fall .cell-item .item-body .item-footer .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.container-water-fall .cell-item .item-body .item-footer .like .like-total {
    font-size: 12px;
    color: #999;
}

.container-water-fall .cell-item .item-body .item-footer .like {
    position: absolute;
    right: 0;
    top : 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.container-water-fall .cell-item .item-body {
    padding: 8px;
}
.container-water-fall .cell-item .item-body .item-footer {
    margin-top: 5px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.like img{
  width: 16px !important;
  height: 16px;
}
.no_data{
  margin-top: 80px;
  width: 100%;
  text-align: center;
}
.no_data img{
  display: inline-block;
  width: 60%;
  height: auto;
}
.no_data div{
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #748AA1;
}
  </style>