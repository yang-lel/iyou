import {request} from "./request";

export function getprofileplus(userid,page,page_size){
  return request({
    url : '/getprofileplus',
    method : "POST",
    data : {
      userid,
      page,
      page_size
    }
  })
}

export function getcollectiondata(userid,page,page_size){
  return request({
    url : '/getcollectiondata',
    method : "POST",
    data : {
      userid,
      page,
      page_size
    }
  })
}

export function like(p_id,is_like,userid){
  return request({
    url : '/like',
    method : "POST",
    data : {
      p_id,
      is_like,
      userid
    }
  })
}

export function checkUserInfo(){
  return request({
    url : '/checkUserInfo',
    method : "POST",
    data : {
    }
  })
}

export function getUserInfo(userid){
  return request({
    url : '/getUserInfo',
    method : "POST",
    data : {
      userid
    }
  })
}

export function changeSay(userid,usersay){
  return request({
    url : '/changeSay',
    method : "POST",
    data : {
      userid,
      usersay
    }
  })
}

export function changepassword(userid,newpassword,oldpassword){
  return request({
    url : '/changepassword',
    method : "POST",
    data : {
      userid,
      newpassword,
      oldpassword
    }
  })
}

export function register(userid,password,username){
  return request({
    url : '/register',
    method : "POST",
    data : {
      userid,
      password,
      username
    }
  })
}

export function login(userid,password){
  return request({
    url : '/login',
    method : "POST",
    data : {
      userid,
      password
    }
  })
}


export function collection(p_id,userid){
  return request({
    url : '/collection',
    method : "POST",
    data : {
      p_id,
      userid
    }
  })
}


export function plus(title,content,userid,location,file){
  return request({
    url : '/plus',
    method : "POST",
    transformRequest: [data => data],
    params : {
      title,
      content,
      userid,
      location,
    },
    data : file
  })
}
