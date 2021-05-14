<!--
 * @message: 描述
 * @Author: 徐士杰
 * @Email: shijie10086@163.com
 * @Github: shijie10086@163.com
 * @Date: 2020-04-11 16:22:31
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-22 11:10:05
 * @Deprecated: 否
 * @FilePath: /vue3-h5/src/components/tabbar/Tabbar.vue
 -->
<template>
  <div class="bottom-tab">
    <section class="tab-item" @click="switchTo('/home')">
      <van-image
        width="22px"
        height="22px"
        :src="route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal"
      />
      <span :class="{on: $route.path.includes('/home')}">首页</span>
    </section>
    <section class="tab-item" @click="switchTo('/market')">
      <van-image
        width="22px"
        height="22px"
        :src="route.path.includes('/market') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal"
      />
      <span :class="{on:route.path.includes('/market')}">交易</span>
    </section>

    <section class="tab-item" @click="switchTo('/me')">
      <van-image
        width="22px"
        height="22px"
        :src="route.path.includes('/me') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
      />
      <span :class="{on: route.path.includes('/me')}">我的</span>
    </section>
  </div>
</template>


<script>
import { ref } from "vue";
import {useRouter,useRoute} from "vue-router"
export default {
  setup(props) {
    const tabBarImgArr = ref([
        {
          normal: require("./../../assets/tabbar/icon_sy02@2x.png"),
          selected: require("./../../assets/tabbar/icon_sy01@2x.png"),
        },
        {
          normal: require("./../../assets/tabbar/icon_hq02@2x.png"),
          selected: require("./../../assets/tabbar/icon_hq01@2x.png"),
        },
        {
          normal: require("./../../assets/tabbar/icon_wd02@2x.png"),
          selected: require("./../../assets/tabbar/icon_wd01@2x.png"),
        },
      ]);

      const router = useRouter();
      const route = useRoute();

      const switchTo = (path)=>{
        router.push(path);
      }

      return {
        tabBarImgArr,
        switchTo,
        route
      }
  }
};
</script>

<style scoped lang="scss">
.bottom-tab {
  width: 100%;
  height: 100px;
  background-color: #1f2b44;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
}
.tab-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #70839c;
  border-top: 1px solid #2a2a2a;
  span {
    margin-bottom: 2px;
    margin-top: 10px;
    color: #70839c;
  }
}

.on {
  color: #2b8ef3;
}
</style>
