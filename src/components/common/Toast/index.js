import Toast from './toast'
const obj={}

obj.install=function(Vue){
    
    //创建组件构造器
    const toastContrustor=Vue.extend(Toast)
    //通过new根据组件构造器创建一个组件对象
    const toast=new toastContrustor()

    //将组件对象手动挂载到一个函数
    toast.$mount(document.createElement("div"))
    //将组件对象挂载到body中
    document.body.appendChild(toast.$el)
    //需要先将Toast渲染到dom上
    //这里将实例化的的组件对象加到原型$toast中
    Vue.prototype.$toast=toast
}
export default obj