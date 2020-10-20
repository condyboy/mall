<template>
    <div>
        <!-- <img src="@assets/image/1.jpg"> -->
        <!-- <p>欢迎光临</p> -->
        <keep-alive exclude="detail">
        <router-view/>
        </keep-alive>
        <main-tabbar v-show="$store.state.isTabbarShow"></main-tabbar>
    </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar'
export default {
  name: 'App',
  components: {
     mainTabbar
  }
}
</script>

<style>
  @import "~@/assets/css/base.css";

</style>
