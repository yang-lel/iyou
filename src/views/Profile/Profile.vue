<template>
  <div id="profile">
    <div class="bgc" :style="{backgroundImage : 'url('+userbgc +')'}">

    <i @click="drawer = true"  class="el-icon-s-fold">
    </i>

      <el-drawer
      direction="ltr"
      size="80%"
      :visible.sync="drawer"
      :with-header="false">
      <div class="title">个人中心</div>
      <ul>
        <li>我的钱包</li>
        <li>我的订单</li>
      </ul>
      <ul>
        <li @click="changeUserInfo">修改个人信息</li>
        <li>账号与安全</li>
        <li>青少年模式</li>
        <li>隐私设置</li>
        <li>推送设置</li>
        <li>通用设置</li>
      </ul>
      <ul>  
        <li>关于我们</li>
        <li>联系客服</li>
      </ul>
      <ul class="last-li">
        <li @click="backlogin">退出登录</li>
      </ul>

    </el-drawer>

    </div>
    <div class="userinfo" @click="tologin">
      <el-avatar :src="usericon"></el-avatar>
      <div>
        <span class="username">{{username}}</span>
        <span class="userid">{{userid}}</span>
      </div>
      <span class="usersay">{{usersay}}</span>

       <el-button type="primary" icon="el-icon-plus" size="small " class="btu">朋友</el-button>
    </div>

    <el-tabs type="border-card" :stretch="true">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-box"></i> 您的作品</span>
    <div class="noshow" v-if="viewuser.Plist === null" @click="toPlus">
      <img src="../../assets/发布.png" alt="" >
      您还没有发布作品，去发布  
    </div> 
    <div v-else class="list">
      <div v-for="(item,index) in viewuser.Plist" :key="index" class="cell-item">
        <img :src="item.p_image" alt="">
        <div class="item-body">
          <div class="item-footer">
          <div class="item-desc">{{item.p_desc | showDesc}}</div>
          <div class="like"><i class="el-icon-star-off"></i>{{item.liked}}</div>
        </div>
        </div>
      </div>
    </div>
  </el-tab-pane>

  <el-tab-pane>
    <span slot="label"><i class="el-icon-star-off"></i> 您的收藏</span>
    <div class="noshow" v-if="viewuser.Clist === null" @click="toHome()">
      <img src="../../assets/逛逛.png" alt="" srcset="">
      你还没有收藏动态，去逛逛
      </div>

    <div v-else class="list">
      <div class="cell-item" v-for="(item,index) in viewuser.Clist" :key="index">
        <img v-if="item.p_image" :src="item.p_image"   />
        <div class="item-body">
          <div class="item-desc">{{item.p_desc}}</div>
          <div class="item-footer">
            <div class="avatar" :style="{ backgroundImage : `url(${item.usericon})` }"></div>
            <div style="height : 40px;flex-flow: column;display:flex;">
              <div class="name">{{item.username | showName}}</div>
              <div class="date">{{item.p_date | showDate}}</div>
            </div>
            <div class="like" :class="item.liked?'active':''" >
              <i class="el-icon-star-off"></i>
              <div class="like-total">{{item.liked}}</div>  
            </div>
          </div>
        </div>
      </div>      
    </div>
    </el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
import {getProfilePlus,getCollectionData} from '../../network/profile'
import {formatDate} from '../../common/utils'
export default {
  name : 'Profile',
  data() {
    return {
      drawer: false,
      viewuser : {
        Plist : null, 
        Clist :null
      }
    };
  },
  computed:{
    username(){
      if(this.$store.state.user === null){
        return '请先登录'
      }else{
        return JSON.parse(this.$store.state.user).user.username
      }
    },
    userid(){
      if(this.$store.state.user === null){
        return ''
      }else{
        return 'id :' + JSON.parse(this.$store.state.user).user.userid
      }
    },
    usersay(){
      if(this.$store.state.user === null){
        return '这个人很懒，什么都没留下'
      }else{
        return JSON.parse(this.$store.state.user).user.usersay
      }
    },
    usericon(){
      if(this.$store.state.user === null){
        return 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }else{
        // console.log(JSON.parse(JSON.stringify(JSON.stringify(this.$store.state.user))));
        return JSON.parse(this.$store.state.user).user.usericon;
      }
    },
    userbgc(){
      if(this.$store.state.user === null){
        return 'https://i.ibb.co/THkz93S/userbgc.png'
      }else{
        // console.log(user);
        return JSON.parse(this.$store.state.user).user.userbgc
      }
    }
  },
  methods:{
    /* 网络请求方法
    */
   getProfilePlus(){
     if(JSON.parse(this.$store.state.user) !== null){
       getProfilePlus(JSON.parse(this.$store.state.user).user.userid).then(res =>{
       console.log(res);
       this.viewuser.Plist  = res 
     })
     }
   },
   getCollectionData(){
     if(JSON.parse(this.$store.state.user) !== null){
        getCollectionData(JSON.parse(this.$store.state.user).user.userid).then(res =>{
          console.log(res);
          this.viewuser.Clist = res
        })
     }
   },
    toPlus(){
      this.$router.push('/plus')
    },
    toHome(){
      this.$router.push('/home')
    },
    tologin(){
      if(this.$store.state.user === null){
        this.$router.push('/login')
      }
    },
    isLogin(){
      console.log(this.$store.state.user);
      if(this.$store.state.user === null){
        return true
      }else{
        return false
      }
    },
    backlogin(){
      if(this.$store.state.user === null){
        alert('您好没有登录')
      }else{
        this.$store.commit('$_removeStorage');
        console.log(this.$store.state.user);
        this.drawer = false
        this.viewuser.Plist = null
        this.viewuser.Clist = null 
      }
    },
    changeUserInfo(){
      if(this.$store.state.user === null){
        alert('您好没有登录')
      }else{
        this.drawer = false
        this.$router.push('/find')
      }
      
    }
  },
  filters:{
    showName(value){
      if(value.length > 5){
        return value.substring(0,5) + "..."
      }else{
        return value
      }
    },
    showDesc(value){
      if(value.length > 7){
        return value.substring(0,7) + ".."
      }else{
        return value
      }
    },
    showDate: function (value) {
      let date = new Date(value);
      return formatDate(date, 'MM-dd hh:mm')
    }
  },
  created(){
    this.getProfilePlus()
    this.getCollectionData()
  },
  deactivated(){
    this.$destroy()
  }
}
</script>

<style scoped>
.bgc{
  width: 100%;
  height: 100px;
  /* background: url('../../assets/微信图片_20210223095320.jpg') top no-repeat; */
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgc ul{
  margin-bottom: 10px ;
}
.bgc ul li {
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px #e9e9eb solid;
  background-color: #fff;
}
.bgc .last-li li{
  text-align: center;
  color: red;
}
.bgc .title{
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: "微软雅黑";
  color: #409EFF;
}

.userinfo{
  position: relative;
  top: -20px;
  padding-left: 35px;
}
.userinfo img{
  width: 80px;
  height: 80px;
  display: inline-block;
}
.userinfo .username{
  position: absolute;
  display: block;
  top: 30px;
  left: 120px;
  font-weight: bold;
}

.userinfo .userid{
  position: absolute;
  display: block;
  top: 55px;
  left: 120px;
}
.userinfo .btu{
  position: absolute;
  display: block;
  top: 40px;
  right: 30px;
}
.userinfo .usersay{
  font-size: 14px;
  /* position: absolute; */
  display: block;
  top: 80px;
  left: 120px;
}
.el-icon-s-fold::before{
  color: #fff;
  font-size: 30px;
  position: absolute;
  right: 10px;
}

div>>>.el-drawer__body{
  width: 80vw;
  background-color: #e9e9eb;
}
.noshow{
  text-align: center;
  color: #909399;
  font-size: 16px;
}


.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.item{
  width: 48%;
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 50px;
  
}
.item img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.text-box{
  position: relative;
}
.desc{
  font-size: 14px;
  width: 80%;
}
/* .like{
  position: absolute;
  top: 13px;
  right: 0;
} */


.cell-item{
  width: 48%;
  background: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  height: auto;
  margin-left: 1%;
  margin-right: 1%;

}

.cell-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px 12px 5px 5px;
}

.cell-item .item-body .item-desc {
  font-size: 15px;
  color: #333;
  line-height: 20px;
  font-weight:bold ; 
  width: 100%;
  height: 20px;
  overflow: hidden;
  word-break:break-all;
}
.cell-item .item-body .item-footer .name{
  font-size: 14px;
  color: #999;
  margin-left: 5px;
  /* max-width: 80px; */
  flex: 1;
}

.cell-item .item-body .item-footer .date{
  font-size: 12px;
  color: #999;
  flex: 1;
  margin-left: 5px;
}

.cell-item .item-body .item-footer .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.cell-item .item-body .item-footer .like .like-total {
  font-size: 12px;
  color: #999;
}

.cell-item .item-body .item-footer .like {
  position: absolute;
  right: 0;
  top: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.cell-item .item-body {
  padding: 8px;
}
.cell-item .item-body .item-footer {
  margin-top: 5px;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.el-avatar{
  height: 80px;
  width: 80px;
} 
</style>