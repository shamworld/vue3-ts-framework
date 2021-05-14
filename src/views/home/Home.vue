<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-22 10:41:45
 * @LastEditors: Roy
 * @LastEditTime: 2021-05-14 16:29:58
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/views/home/Home.vue
-->
<template>
  <div class="containers">
    <NavBar
      :title="'首页'"
      :isShowLeft="false"
      :rightText="'右边'"
      :rightBtnClick="rightBtnClick"
    />
    <div class="contents" style="margin-bottom: 100px">
      <div>{{ text }}</div>
      <van-button type="primary" @click="storeClick">调用store</van-button>
      <van-button type="primary" @click="i18nClick">多语言切换</van-button>
      <img :src="url" />
      <div>t语法:{{t('success')}}</div>
      <div>proxy.$t语法:{{proxy.$t('success')}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import NavBar from "../../components/navbar/NavBar.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../../store";
import { SMSProps } from "../../store/modules/sms.store";
import { computed, onMounted, ref, getCurrentInstance } from "vue";
import { getData } from "../../api/request";
import { Toast } from 'vant';
import { useI18n } from "vue-i18n"
export default {
  components: {
    NavBar,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const text = computed(() => store.state.sms.obtainState);
    const url = ref("");
    const { t } = useI18n();
    let { proxy }:any = getCurrentInstance()

    const storeClick = () => {
      store.commit("setObtainState", !store.state.sms.obtainState);
    };
    const rightBtnClick = () => {
      requestImage();
    };

    const requestImage = () => {
      getData("/api/v3/captcha", {}).then((res) => {
        url.value = res.img;
        Toast.success(t('success'));
      });
    };
    const i18nClick = () => {
      proxy.$i18n.locale = localStorage.lang=='en'?'cn':'en';
      localStorage.setItem('lang',proxy.$i18n.locale)
    };
    onMounted(() => {
      requestImage();
    });
    return {
      text,
      storeClick,
      rightBtnClick,
      url,
      i18nClick,
      t,
      proxy
    };
  },
};
</script>

<style lang="sass" scoped>
</style>