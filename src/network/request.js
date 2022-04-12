import axios from "axios";
//最终方式
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //axios的拦截器
  //2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    
    return config
  }, err => {
    // console.log(err);
  })
  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data //拦截成功后需要返回
  }, err => {
    console.log(err);
  })
  return instance(config)  //instance本身返回的就是一个promise
}