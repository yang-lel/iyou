<template>
  <div id="profile">
    <div class="bgc" :style="{backgroundImage : 'url('+viewuser.bgc +')'}">

  <i class="el-icon-back" @click="back"></i>



    </div>
    <div class="userinfo">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div>
        <span class="username">{{viewuser.username}}</span>
        <span class="userid">id : {{viewuser.userid}}</span>
      </div>
      <span class="usersay">{{viewuser.usersay}}</span>

       <el-button type="warning" icon="el-icon-plus" size="small " class="btu">关注</el-button>
    </div>

    <el-tabs type="border-card" :stretch="true">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-box"></i> TA的作品</span>
    <div class="noshow" v-if="false" @click="back">
      <img src="../../assets/发布.png" alt="" >
      TA还没有发布作品，逛逛其他
    </div> 
    <div v-else class="list">
      <div v-for="(item,index) in viewuser.Plist" :key="index" class="cell-item">
        <img :src="item.image" alt="">
        <div class="item-body">
          <div class="item-footer">
          <div class="item-desc">{{item.title | showDesc}}</div>
          <div class="like"><i class="el-icon-star-off"></i>{{item.liked}}</div>
        </div>
        </div>
      </div>
    </div>
  </el-tab-pane>

  <el-tab-pane>
    <span slot="label"><i class="el-icon-star-off"></i> TA的收藏</span>
    <div class="noshow" v-if="false" @click="toPlus">
      <img src="../../assets/发布.png" alt="" >
      TA还没有收藏作品，去逛逛
    </div>
    <div v-else class="list">
      <div class="cell-item" v-for="(item,index) in viewuser.Clist" :key="index">
        <img v-if="item.image" :src="item.image"   />
        <div class="item-body">
          <div class="item-desc">{{item.title}}</div>
          <div class="item-footer">
            <div class="avatar" :style="{ backgroundImage : `url(${item.avatar})` }"></div>
            <div style="height : 40px;flex-flow: column;display:flex;">
              <div class="name">{{item.user | showName}}</div>
              <div class="date">{{item.date}}</div>
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
export default {
  name : 'viewuser',
  data(){
    return {
      viewuser : {
        username : '默认的小妖精',
        userid : 'admin123',
        usersay : '这个人很懒，什么都没说',
        bgc : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
        Plist : [{
          title : '大是实打实看得', 
          liked:15,
          image : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
        },
        {
          title : '大家ask链接打开拉萨京东卡随即离开教室的 ', 
          liked:15,
          image : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
        },
        {
          title : '撒娇打卡机圣诞卡了解阿斯利康大家', 
          liked:15,
          image : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
        }],
        Clist :[{
                title : '大家是快乐的就爱上了是看得见阿喀琉斯觉得老咔叽', 
                liked:15,
                user : '磨人的小实打实妖精' ,
                image : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
                avatar : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
                date : '三天前'
                },{
                title : 'goodgoodgoododgood非常好用', 
                liked:15,
                user : '磨人的小实打实妖精' ,
                image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4048620239,510232937&fm=26&gp=0.jpg',
                avatar : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3103731451,4013003819&fm=26&gp=0.jpg',
                date : '2020-01-21'
                }]
      }
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    toPlus(){
      this.$router.push('/plus')
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
    }
  }
}
</script>

<style scoped>
.bgc{
  width: 100%;
  height: 100px;
  background-color: #409EFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
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
div /deep/.el-icon-back{
  font-size: 24px;
  color: #fff;
  margin-top: 8px;
  margin-left: 8px;
}
.el-avatar{
  height: 80px;
  width: 80px;
}
.noshow{
  text-align: center;
  color: #909399;
  font-size: 14px;
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
</style>