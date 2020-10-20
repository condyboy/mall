import axios from 'axios'

export function requestNetwork(config) {
  //通过基础的base来创建实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  })

  //请求拦截,传入两个函数：拦截成功得回调函数和拦截失败得回调函数
  //1、发送网络请求时得loading动画
  //2、请求登录时候判断是否携带token，如果没有登录，需要跳转到指定页面
  //3、处理config中不符合服务器发送要求得数据，如headers等配置
  instance.interceptors.request.use(config=>{
    // console.log(config)
    //需要将config返回保证能够正确的执行请求
    return config
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  },err=>{
    console.log(err)
  })
  //instance传入config时调用的返回值就是promise
  return instance(config)
}