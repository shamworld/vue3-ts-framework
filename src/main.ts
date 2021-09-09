/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-09 10:33:15
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "./configVant"
import { Dialog } from 'vant'
import 'vant/lib/index.css';
import "./style/index.scss";
import { i18n } from './lang'
import "amfe-flexible";

// 解决IOS上输入和滑动冲突
window.document.ontouchmove = (e) => {
    document.querySelectorAll("input").forEach((e) => {
        e.blur();
    });
    document.querySelectorAll("textarea").forEach((e) => {
        e.blur();
    });
};
// 解决ios，input关闭键盘后导致页面底部空缺问题
document.body.addEventListener(
    "blur",
    function () {
        window.scrollTo(0, 0);
    },
    true
);



createApp(App)
    .use(i18n)
    .use(Vant)
    .use(Dialog)
    .use(store).use(router).mount('#app')
