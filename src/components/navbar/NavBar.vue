<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-04 15:26:37
 * @LastEditors: Roy
 * @LastEditTime: 2021-03-26 16:11:44
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework/src/components/navbar/NavBar.vue
-->
<template>
  <div class="nav_head" @touchmove.prevent>
      <img src="./../../assets/left.png"  @click="goback" v-if="isShowLeft"/>
      <span class="title" :style="isShowLeft?'color:#fff':''">{{title}}</span>
      <span class="right" @click="rightBtnClick">{{rightText}}</span>
  </div>
</template>
<script >
import { useRouter } from "vue-router";
export default {
  props: {
    isShowLeft: Boolean,
    title: String,
    rightText: String,
    rightBtnClick: Function,
    isGoHome: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const goback = () => {
      if(props.isGoHome){
            router.push('/');
        }else{
            router.back();
        }
    };
    return {
      goback,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav_head{
    background:#151F30;
    width: 100%;
    height: 100px;
    flex-direction: row;
    z-index: 999;
    position: relative;
  }
  img {
    width: 30px;
    margin-top: 40px;
    padding:0 15px;
    height: 30px;
  }
  .title{
    color: #fff;
    font-size: 36px;
    text-align: center;
    margin-top: 20px;
    margin-left: -200px;
    position: absolute;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    left: 50%;
    width: 400px;
  }
  .right{
    color: #fff;
    text-align: center;
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 28px;
    height: 80px;
    line-height: 80px;
  }
</style>