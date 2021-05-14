/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-05-14 16:04:42
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { PullRefresh, List, Popup, Grid, GridItem, AddressEdit, AddressList, Icon, SubmitBar, CheckboxGroup, SwipeCell, Stepper, Checkbox, Field, Form, Tag, Button, Image as VanImage, Card, Tab, Tabs, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, NavBar } from 'vant';
import 'vant/lib/index.css';
import "./style/index.scss";
import i18n from './lang'
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
    .use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload, { loading: require('./assets/default.png') })
    .use(Badge)
    .use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem)
    .use(Tab).use(Tabs).use(Card).use(VanImage).use(Tag).use(Button).use(Form).use(Field)
    .use(Checkbox).use(Stepper).use(SwipeCell).use(CheckboxGroup).use(SubmitBar).use(Icon).use(AddressList).use(AddressEdit)
    .use(GridItem).use(Grid).use(Popup).use(List).use(PullRefresh).use(NavBar)
    .use(store).use(router).mount('#app')
