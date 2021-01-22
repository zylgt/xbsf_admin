import axios from 'axios';
const qs = require('qs');
const service=axios.create({
    baseURL: process.env.BASE_API,    //请求公共地址，baseURL`将被添加到`url`，所以后边请求只需api的方式即可
    timeout: 50000,    //请求响应时间
})
console.log(process.env,111)
// 是否携带cookie信息，默认为false，根据项目需求设置
// service.defaults.withCredentials = true;
// 添加一个请求拦截器
service.interceptors.request.use(function (config) {
    // 对请求数据做些事
    if(config.method  === 'post'){  //post传参序列化
      // config.data = qs.stringify(config.data);
    } 
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加一个响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做些事
    return response;
  }, function (error) {
      console.log(error)
    // Do something with response error
    return Promise.reject(error);
  });
export default  service;
