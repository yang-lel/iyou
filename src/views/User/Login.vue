<template>
  <div id="bgc">
    <div @click="toprofile">
      <i class="el-icon-arrow-left"></i>
    </div>


    <el-card class="box-card">

      <el-tabs v-model="activeName"  :stretch="true">
    <el-tab-pane label="登录" name="first">
      <div class="title">
        欢 迎 登 录 IYOU
      </div>
      <el-form ref="form" :model="form" label-width="48px">
  <el-form-item label="账号" >
    <el-input v-model="form.userid" :clearable="true"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="form.password" :clearable="true" :show-password="true"></el-input>
  </el-form-item>
    <el-button type="primary" round @click="onSubmit">登录</el-button>
</el-form>
    <div>
      <el-link type="info" :underline="false">登录遇到问题？</el-link>
      <el-link type="primary" :underline="false" class="more">忘记密码？</el-link>
    </div>
    </el-tab-pane>



    <el-tab-pane label="注册" name="second">
      <div class="title">
        欢 迎 注 册 IYOU
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="68px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userid">
          <el-input v-model="ruleForm.userid"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="checked">
          <el-checkbox v-model="ruleForm.checked">我已阅读网站使用协议并同意</el-checkbox>    
        </el-form-item>
          <el-button type="primary" round @click="submitForm('ruleForm')">注册</el-button>
      </el-form>
    </el-tab-pane>


  </el-tabs>


    </el-card>
  </div>
</template>

<script>
import {login ,register} from '../../network/profile'
export default {
  name : 'Login',
   data() {
     var checkuserid = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('账号不能为空'));
        }else{
          callback();
        }
      };
      var checkusername = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkchecked = (rule, value, callback) => {
        if (value == false) {
          return callback(new Error('请勾选协议'));
        }else{
          callback();
        }
      };
      return {
        activeName: 'first',
        form: {
          userid: '',
          password: '',
        },
         ruleForm: {
          password: '',
          checkPass: '',
          userid: '',
          username : '',
          checked : false
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userid: [
            { validator: checkuserid, trigger: 'blur' }
          ],
          username: [
            { validator: checkusername, trigger: 'blur' }
          ],
          checked: [
            { validator: checkchecked, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      toprofile(){
        this.$router.go(-2)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        this.Login()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register()
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //登录
      Login(){
        login(this.form.userid,this.form.password).then(res =>{
          console.log(res);
          if(res.code == 200 && res.data){
            let userinfo = {
              username : res.data.username,
              userid : res.data.userid,
              userbgc : res.data.userbgc,
              usericon : res.data.usericon,
              usersay : res.data.usersay         
            }
            //储存用户信息
            this.$store.commit('$_setUserInfo',userinfo)
            //储存token
            localStorage.setItem("token",res.data.token)
            this.$router.go(-1);
          }else if(res.code == 401){
            alert('账号或密码不正确!')
          }else if(res.code == 402){
            alert('账号不存在!')
          }
        })
      },
      //注册
      register(){
        register(this.ruleForm.userid,this.ruleForm.password,this.ruleForm.username).then(res =>{
          console.log(res);
          if( res.code  == 200 && res.data){
            let userinfo = {
              username : res.data.username,
              userid : res.data.userid,
              userbgc : res.data.userbgc,
              usericon : res.data.usericon,
              usersay : res.data.usersay         
            }
            //储存用户信息
            this.$store.commit('$_setUserInfo',userinfo)
            //储存token
            localStorage.setItem("token",res.data.token)
            this.$router.go(-1);
          }else if(res.code == 402){
            alert('账号已被注册')
          }         
        })
      },      
    }
}
</script>

<style scoped>
#bgc{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background : url('../../assets/loginbgc.png') no-repeat top;
  background-size: cover;
}
.el-icon-arrow-left{
  margin-top: 5px;
  margin-left: 5px;
  font-size: 24px;
  color: #fff;
}
.el-card{
    width: 320px;
    margin-left: calc((100% - 320px)/2);
    margin-top: 20%;
    padding: 0;
    opacity: 0.9;
}
.el-button{
  width: 80%;
  margin-left: 10%;
}
.el-link{
  /* margin-left: 10%; */
  margin-top: 10%;
}
.more{
  float: right;
}
.el-checkbox{
  position: relative;
  left: -24px;
}
.title{
  color: #4083ff;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>