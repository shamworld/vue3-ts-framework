<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-05-14 16:40:31
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-show="route.meta.isShowBottomTabbar" />
  </div>
  <!-- <router-view/> -->
</template>

<script>
import TabBar from "./components/tabbar/Tabbar";
import { useRoute} from 'vue-router'
export default {
  components: {
    TabBar,
  },
  setup(){
    const route = useRoute();

    return {
      route
    }
  }
}
</script>
<style lang="scss">
#app {
  height: 100vh;
  background: #fff;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
