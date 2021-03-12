import {request} from "./request";

export function Login(userid,password){
    return request({
        url:'/login',
        params: {
          userid,
          password
        }
    })
}


export function Register(userid,password,username){
  return request({
      url:'/register',
      params: {
        userid,
        password,
        username
      }
  })
}