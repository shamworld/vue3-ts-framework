/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-22 15:01:21
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-09 10:18:44
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/lang/index.ts
 */
import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
import jaJP from 'vant/lib/locale/lang/ja-JP'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import cn from './zh-cn';
import en from './en';

const messages: any = {
  cn,
  en,
}


const i18n = createI18n({
  locale: localStorage.lang || 'cn',
  messages
})
// Locale.use((key, value) => i18n.t(key, value));
// 更新vant组件库本身的语言变化，支持国际化
function vantLocales(lang) {
  if (lang === 'jp') {
    Locale.use(lang, jaJP)
  } else {
    Locale.use(lang, zhCN)
  }
}
export { i18n, vantLocales }


//用法
// import {  getCurrentInstance } from "vue";
// import { useI18n } from "vue-i18n"
// const { t } = useI18n();
// let { proxy }:any = getCurrentInstance()
// t('success')
// proxy.$t('succes') 无法在响应式reactive,ref等里面用
// return {
//   t,
//   proxy
// }