<template>
  <div id="details-tab-bar">
    <div class="btu" @click="open2"><i class="el-icon-star-off"></i>收藏</div>
    <div class="btu" @click="open1"><i class="el-icon-help"></i>点赞</div>
    <div class="btu" @click="drawer = true"><i class="el-icon-chat-dot-round"></i>评论</div>

    <el-drawer
      :append-to-body="true"
      :visible.sync="drawer"
      :with-header="false"
      direction="btt"
      size="70%">
      <h2>评论</h2>
      <div v-for="(item,index) in comment" :key="index" class="comment_item">
        <div class="userinfo">
          <el-avatar :src="item.usericon"></el-avatar>
          <div class="name">{{item.username}}</div>
          <div class="date">{{item.date}}</div>
        </div>
          <div class="content">{{item.content}}</div>
      </div>

    <div class="comment_btu">
      <el-input v-model="input" placeholder="快写下您的评论吧"></el-input> <el-button>发送</el-button>
    </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name : 'DetailsTabBar',
  data() {
    return {
      drawer: false,
      input : '',
      comment : [
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        },
        {
          usericon : 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df431adcbef7609510bf4062cdda3cc7cd99e22.jpg',
          username : '默认的小妖精',
          date : '2020-12-12 12:12',
          content : 'zhenhao haochide budeliao '
        }
      ]
    };
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
  margin-bottom: 45px;
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
}
div >>> .el-button{
  border:  none;
  color: #409EFF;
}
div >>>.el-input__inner{
  border : none;
}
.message{
  background-color: #409EFF;
}
</style>