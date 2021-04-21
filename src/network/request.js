import axios from 'axios'
import { Date } from 'core-js';

export function request(config) {
  // 1.创建axios的实例
  let token = ''
  if(localStorage.getItem("token")){
    // console.log(localStorage.getItem("token"));
    token = localStorage.getItem("token")
  }
  const instance = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL: 'http://8.131.50.165:3001/',
    timeout: 5000, 
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        Authorization : token
    }
  })
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    let date = new Date().getTime()
    console.log(res.config.url + date);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}