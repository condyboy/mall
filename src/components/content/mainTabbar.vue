<template>
    <div>
        <div id="app">
            <tab-bar>
                <tab-bar-item path="/home">
                    <img slot="image" src="~assets/image/tabbar/home.svg" />
                    <img slot="image-active" src="~assets/image/tabbar/home_active.svg" />
                    <div slot="text">首页</div>
                </tab-bar-item>
                <tab-bar-item path="/category">
                    <img slot="image" src="~assets/image/tabbar/category.svg" />
                    <img slot="image-active" src="~assets/image/tabbar/category_active.svg" />
                    <div slot="text">分类</div>
                </tab-bar-item>
                <tab-bar-item path="/cart">
                    <img slot="image" src="~assets/image/tabbar/shopcart.svg" />
                    <img slot="image-active" src="~assets/image/tabbar/shopcart_active.svg" />
                    <div slot="text">购物车</div>
                </tab-bar-item>
                <tab-bar-item path="/profile">
                    <img slot="image" src="~assets/image/tabbar/profile.svg" />
                    <img slot="image-active" src="~assets/image/tabbar/profile_active.svg" />
                    <div slot="text">我的</div>
                </tab-bar-item>
            </tab-bar>
        </div>
    </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem"
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>
<style>
  @import "~@/assets/css/base.css";
  #app{
    background-color: #fff;
  }
</style>