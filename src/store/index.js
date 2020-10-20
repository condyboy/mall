import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow:true,
    cartList:[],
  },
  mutations: {
    //当进入detail页面时控制底部tabbar是否展示
    changeTabbar(state,flag){
      state.isTabbarShow=flag
    },
    addCount(state,payload){
      payload.count=payload.count+1
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      const result=context.state.cartList.find(item=> item.iid === payload.iid)
      if(!result){
        payload.count=1
        payload.checked=false
        context.commit("addToCart",payload)
      }else{
        context.commit("addCount",result)
      }
      
  }

  },
  modules: {
  },getters:{
    cartList(state) {
      return state.cartList
    },
    cartCount(state, getters) {
      return getters.cartList.length
    }
  }
})
