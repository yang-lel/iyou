<template>
  <div>
    <nav-bar>
       <div slot="middle" class="middle">消 息</div>
       <div slot="right" class="right">
         <i class="el-icon-circle-plus-outline"></i>
       </div>
     </nav-bar>
    <el-input
      placeholder="请输入内容"
      v-model="search" class="search" size="small">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <div class="content">
      <ul>
        <li>
          <el-button type="success" icon="el-icon-chat-dot-round" circle></el-button> 
          <div class="info">
            <div class="username">评论</div>
          </div>
          <div class="date">
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>

        <li>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <div class="info">
            <div class="username">收藏</div>
          </div>
          <div class="date">
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
        
        <li>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> 
          <div class="item">
            <div class="info">
              <div class="username">测试一号</div>
              <div class="message">您好</div>
            </div>
            <div class="date">
              2021-02-21
            </div>
          </div>
        </li>

        <li>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> 
          <div class="info">
            <div class="username">测试二号</div>
            <div class="message">您好呀</div>
          </div>
          <div class="date">
            2021-02-21
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'

export default {
  name : 'Message',
  data(){
    return {
      search : ''
    }
  },
  components:{
    NavBar
  },
  beforeCreate(){
    if(this.$store.state.user === null){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.middle{
  font-size: 18px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-weight: bold;
  /* font-family: Georgia,Serif; */
  color: #4D7CFE;
}
.right{
  text-align: right;
  margin-right: 20px;
}

div /deep/ .el-icon-circle-plus-outline{
  color: #4D7CFE;
  font-size: 28px;
  margin-top: 7.5px;
}

.search{
  width: 90%;
  /* height: 30px; */
  margin-top: 5px;
  margin-left:5% ;
  border-radius:  15px;
}
div /deep/ .el-input__inner{
  border-radius:  30px;
}
div /deep/ .el-input{
  margin-top: 55px;
}
.content{
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
}

.content ul li {
  width: 100%;
  height: 40px;
  /* background-color: red; */
  position: relative;
  margin-bottom: 15px;
}
.info{
  width: 85%;
  height: 45px;
  position: absolute;
  top : 0 ;
  left: 50px;
  border-bottom: 1px #e9e9eb solid;
}

.message{
  font-size: 14px;
  color: #909399;
}
.date{
  position: absolute;
  right: 0;
  top: 10px;
}
</style>