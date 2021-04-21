<template>
  <div id="details-tab-bar">
    <div class="btu" @click="open2"><i class="el-icon-star-off"></i>收藏</div>
    <div class="btu" @click="open1"><i class="el-icon-help"></i>点赞</div>
    <div class="btu" @click="clickComment"><i class="el-icon-chat-dot-round"></i>评论</div>

    <el-drawer
      :append-to-body="true"
      :visible.sync="drawer"
      :with-header="false"
      direction="btt"
      size="70%">
      <h2>评论</h2>
      <div class="tmpe1"></div>
      <div v-infinite-scroll="load" style="overflow:auto" v-if="comment.data != null">
        <div v-for="(item,index) in comment.data" :key="index" class="comment_item">
        <div class="userinfo">
          <el-avatar :src="item.userinfo.usericon"></el-avatar>
          <div class="name">{{item.userinfo.username}}</div>
          <div class="date">{{item.date | showDate}}</div>
        </div>
          <div class="content">{{item.content}}</div>
      </div>
      </div>
      <div v-else class="no_comment_tips">
        还没有评论,快来发布吧！
      </div>
      <div class="tmpe"></div>
    <div class="comment_btu">
      <el-input v-model="commentInput" placeholder="快写下您的评论吧"></el-input>
      <el-button type="primary" round @click="sendComment">发送</el-button>
    </div>
    </el-drawer>
  </div>
</template>

<script>
import {getComment,comment} from '../../../network/home'
import {formatDate} from '../../../common/utils'
export default {
  name : 'DetailsTabBar',
  data() {
    return {
      drawer: false,
      commentInput : '',
      comment : {
        total_page : 0,
        data : null,
        current_page : 1,
        total_num : 0
      },
      page_size : 5
    };
  },
  props:{
    p_id : {
      type : Number,
      default : 0
    }
  },
  methods:{
    open1() {     
        this.$message({
          message: '点赞成功',
          type : 'success',
          offset : 320,
          center : true,
          showClose : true,
          duration : 2000
        });
    },
    open2() {      
        this.$message({
          message: '收藏成功',
          type : 'success',
          offset : 320,
          center : true,
          showClose : true,
          duration : 2000
        });
    },
    clickComment(){
      this.drawer = true
      this.getComment()
    },
    getComment(){
      getComment(this.p_id,this.comment.current_page,this.page_size).then(res => {
        console.log(res);
        if(res.code == 200 && res.data.data){
          if(res.data.current_page > 1){
            this.comment.data = this.comment.data.concat(res.data.data)
          }else{
            this.comment.data = res.data.data
          }
          this.comment.total_num = res.data.total_num
          this.comment.current_page = res.data.current_page
          this.comment.total_page = res.data.total_page
        }
      })
    },
    load(){
      if(this.comment.data){
        if(this.comment.data.length >= this.comment.total_num){
          return
        }
        this.comment.current_page += 1
        this.getComment()
      }
    },
    sendComment(){
      if(this.commentInput == ''){
        alert('评论不能为空')
        return
      }
      console.log(this.p_id,this.commentInput,this.$store.state.userinfo.userid);
      comment(this.p_id,this.commentInput,this.$store.state.userinfo.userid).then(res=>{
        console.log(res);
        if(res.code == 200 && res.data){
          this.comment.current_page = 1
          this.getComment()
          this.commentInput = ''
        }
      })
    }
  },
  filters:{
    showDate: function (value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }

}
</script>

<style scoped>
#details-tab-bar{
  display: flex;
  height: 44px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .12), 2px 2px 6px rgba(0, 0, 0, .04);
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
}
#details-tab-bar .btu{
  flex: 1;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  color: #409EFF;
}
.comment_item{
  width: 90%;
  margin-left: 5%;
  /* border: 1px solid red; */
  border-bottom: 1px solid #e9e9eb;
  margin-top: 15px;
  /* margin-bottom: 45px; */
}
.tmpe{
  width: 100%;
  height: 40px;
}
.userinfo{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.name{
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
}
.date{
  font-size: 14px;
  margin-left: 50px;
  color: #909399;
}
h2{
  text-align: center;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 44px;
  line-height: 44px;
  position: fixed;
  width: 100%;
  background-color: #fff;
}
.tmpe1{
  width: 100%;
  height: 44px;
}
.content{
  margin-left: 40px;
  font-size: 16px;
}
div >>> .el-drawer__body {
    overflow: auto;
}

/*2.隐藏滚动条，太丑了*/
div >>> .el-drawer__container ::-webkit-scrollbar{
    display: none;
}
.comment_btu{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #DCDFE6;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
}
div >>> .el-button{
  border:  none;
  /* background-color: red; */
  /* color: #409EFF; */
  color: #fff;
}
div >>>.el-input__inner{
  border : none;
}
.message{
  background-color: #409EFF;
}
.no_comment_tips{
  text-align: center;
  margin-top: 50px;
}
</style>