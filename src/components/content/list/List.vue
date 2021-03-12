<template>
  <div class="container-water-fall" v-if="reFresh">
    <waterfall :col='2'  :data="arr"  @loadmore="loadmore"  @scroll="scroll" height='100vh'>
        <div class="cell-item" v-for="item in arr" :key="item.p_id" @click="itemClick(item.p_id)">
          <img v-if="item.p_image" :src="item.p_image"   />
          <div class="item-body">
              <div class="item-desc">{{item.p_desc}}</div>
              <div class="item-footer">
                  <div class="avatar" :style="{ backgroundImage : `url(${item.usericon})` }"></div>
                    <div style="height : 40px;flex-flow: column;display:flex;">
                      <div class="name">{{item.username | showName }}</div>
                      <div class="date">{{item.p_date | showDate}}</div>
                    </div>
                  <div class="like" :class="item.liked?'active':''" >
                      <!-- <i class="el-icon-star-off"></i> -->
                      <img src="../../../assets/dianzan.svg" alt="">
                      <div class="like-total">{{item.liked}}</div>  
                  </div>
              </div>
          </div>
        </div>
    </waterfall>
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
    arr : {
      type : Array,
      default(){
        return []
      }
    }
  },
   watch: {
    arr: {
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
      if(scrollData.scrollTop > 0){
        this.$emit('scroll')
      }else{
        this.$emit('noscroll')
      }
    },
    switchCol(col){
          this.col = col
          console.log(this.col)
    },
    loadmore(){
      console.log(1);
      this.arr = this.arr.concat(this.arr)
    },
    itemClick(id){
      this.$router.push('/')
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
          let date = new Date(value);
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
  </style>