<template>
    <div id="cart">
        <navbar class="nav-bar">
            <div slot="middle">购物车({{cartCount}})</div>
        </navbar>
        <scroll class="content" ref="btscroll">
           <cart-list :cartList="cartList"></cart-list>
        </scroll>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import scroll from 'components/common/Scroll/Scroll'
import CartList from './childComps/CartList'
import {debounce} from 'common/utils'
import bottomBar from './childComps/BottomBar'
//使用mapGetters将getters混入到computed计算属性中
import { mapGetters } from 'vuex'
    export default {
        components: {
            navbar,
            scroll,
            CartList,
            bottomBar
        },
        data() {
            return {

            };
        },
        computed: {
           ...mapGetters(['cartList','cartCount'])
        },
        watch: {},
        methods: {},
        activated() {
            //每次回到当前页面时刷新scroll
            this.$refs.btscroll.refresh()
        },
    }
</script>
<style scoped>
#cart{
    height: 100vh;
}
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
.content{
    height: calc(100% - 93px); 
    overflow: hidden;
}
</style>