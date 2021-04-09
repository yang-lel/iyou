import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    // baseURL: 'http://8.131.50.165:3001/',
    timeout: 5000,    
  })
  // console.log(instance.headers);

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (!config.headers.hasOwnProperty('Authorization') && token) {
      config.headers.Authorization = token;
    }
    return config;
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}