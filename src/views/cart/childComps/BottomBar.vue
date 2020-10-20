<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" :isChecked="isChecked" @checkBtnClick="checkBtnClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="sumup">去计算({{$store.getters.cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './checkedButton'
	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
		  totalPrice() {
         return this.$store.getters.cartList.filter(item =>{
           return item.checked
         }).reduce((pre,cur)=>{
           return parseInt(pre)+parseInt(cur.price)*parseInt(cur.count)
         },0)
      },
      // isSelectAll: function () {
      //   return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
      // }

    },
    data() {
      return {
        isChecked:false
      }
    },
    methods: {
      checkBtnClick(){
         let isunSelectAll=this.$store.getters.cartList.filter(item => !item.checked)
         
         if(isunSelectAll.length!=0){
          this.$store.getters.cartList.forEach(item=>{
              item.checked=true
           })
            this.isChecked=true
         }else{
          this.$store.getters.cartList.forEach(item=>{
              item.checked=false
           })
          this.isChecked=false
         }
      },
      sumup(){
         let isSelectAll=this.$store.getters.cartList.filter(item => item.checked)
         if(!this.$store.getters.cartList || isSelectAll.length==0){
           this.$toast.show("请添加要结算的商品",1500)
         }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
