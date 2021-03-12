<template>
 <div id="map">
  <!-- <nav-bar>
    
  </nav-bar> -->
<el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
   <el-form-item label="旧密码" prop="oldpass">
    <el-input type="password" v-model="oldpass" autocomplete="off"></el-input>
  </el-form-item> 
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
  </el-form-item>
</el-form>


 </div>
 
</template>

<script>
import NavBar from '../../components/commond/NavBar/NavBar'
import {changePassWord} from '../../network/profile'
  export default {
    components:{
      NavBar
    },
    data() {
      return {
          pass: '',
          checkPass: '',
          oldpass: ''
      };
    },
    methods: {
      submitForm() {
        if(this.oldpass === ''){
          alert('密码不能为空')
        }else if(this.oldpass === this.pass){
          alert('修改的密码不能和原密码一致')
        }else if(this.pass !== this.checkPass){
          alert('两次密码不一致')
        }else if(this.pass === ''){
          alert('密码不能为空')
        }else{
          changePassWord(JSON.parse(this.$store.state.user).user.userid,this.oldpass,this.pass).then(res => {
            console.log(res);
            if(res.message === '修改成功'){
              alert(res.message)
              localStorage.removeItem("userinfo")
              // localStorage.setItem("userinfo",JSON.stringify(user))
              this.$store.commit('$_setStorage', {user: res.result[0]})
              // console.log(localStorage.getItem("userinfo"));
              this.$router.push('/profile')
            }else if(res === '密码不正确！'){
              alert(res)
              this.oldpass = ''
              this.pass = ''
              this.checkPass = ''
            }
          })
        }
        
      }
    },
    beforeCreate(){
      if(this.$store.state.user === null){
        this.$router.push('/login')
      }
    }
  }
</script>
