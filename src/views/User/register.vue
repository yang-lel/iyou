<template>
  <!-- <form action="/api/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="logo">
      <input type="submit" value="提交">
    </form> -->

<div>
      <div @click="posttest11">
      hello
    </div>
  <input type="file" multiple="multiple" @change="aaa">sss
</div>
   
</template>

<script>
import {comment,like,checkUserInfo,getUserInfo,changeSay,changepassword,register,login,getprofileplus,getcollectiondata,collection,plus} from '../../network/profile'

import axios from 'axios'
export default {
  name : 'register',
  data(){
    return {
      p_id : 4,
      content : 'wo haishi yitiao pinglun',
      userid : 'admin',
      is_like : 1,
      usersay : 'good ideas',
      newpassword : '123456',
      oldpassword : '111111',
      password : '123456',
      username : '我是一个新账号',
      page : 1,
      page_size : 2,
      title : '1111',
      content : '22222',
      location : '上海市',
      file : null,
    }
  },
  methods : {
    posttest(){
      comment(this.p_id,this.content,this.userid).then(res => {
        console.log(res);
      })
    },
    posttest1(){
      like(this.p_id,this.is_like,this.userid).then(res => {
        console.log(res);
      })
    },
    posttest2(){
      checkUserInfo().then(res => {
        console.log(res);
      })
    },
    posttest3(){
      getUserInfo(this.userid).then(res => {
        console.log(res);
      })
    },
    posttest4(){
      changeSay(this.userid,this.usersay).then(res => {
        console.log(res);
      })
    },
    posttest5(){
      changepassword(this.userid,this.newpassword,this.oldpassword).then(res => {
        console.log(res);
      })
    },
    posttest6(){
      register(this.userid,this.password,this.username).then(res => {
        console.log(res);
      })
    },
    posttest7(){
      login(this.userid,this.password).then(res => {
        console.log(res);
      })
    },
    posttest8(){
      getprofileplus(this.userid,this.page,this.page_size).then(res => {
        console.log(res);
      })
    },
    posttest9(){
      getcollectiondata(this.userid,this.page,this.page_size).then(res => {
        console.log(res);
      })
    },
    posttest10(){
      collection(this.p_id,this.userid).then(res => {
        console.log(res);
      })
    },
    posttest11(){
      plus(this.title,this.content,this.userid,this.location,this.file).then(res => {
        console.log(res);
      })
    },
    aaa(event){
      
      let formdata = new FormData()
      for(let item in event.target.files){
        formdata.append('file',event.target.files[item])
      }
      // console.log(formdata.values());  
      this.file = formdata
    }
  }
}
</script>

<style>

</style>