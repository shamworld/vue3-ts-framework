<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-09 10:19:46
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/App.vue
-->

<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <TabBar v-show="route.meta.isShowBottomTabbar" />
  </div>
  <!-- <router-view/> -->
</template>

<script lang="ts">
import TabBar from "./components/tabbar/Tabbar.vue";
import { useRoute } from "vue-router";
import { onMounted, getCurrentInstance, ref, nextTick, provide } from "vue";
import { vantLocales } from "./lang";
export default {
  components: {
    TabBar,
  },
  setup() {
    const route = useRoute();
    const isRouterAlive = ref<boolean>(true);
    let { proxy }: any = getCurrentInstance();
    const reload = () => {
      isRouterAlive.value = false;
      nextTick(() => {
        isRouterAlive.value = true;
      });
    };
    provide("reload", reload);
    onMounted(() => {
      proxy.$i18n.locale = localStorage.lang || "cn";
      localStorage.setItem("lang", proxy.$i18n.locale);
      vantLocales(proxy.$i18n.locale);
    });
    return {
      route,
      isRouterAlive,
    };
  },
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  background: #fff;
  width: 100%;
}
</style>
