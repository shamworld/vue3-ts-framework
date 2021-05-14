/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2020-07-17 23:18:08
 * @LastEditors: Roy
 * @LastEditTime: 2021-05-14 15:16:39
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/router/modules/tabbar.router.js
 */
const tabbar = [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/Home"),
        meta: { isShowBottomTabbar: true, title: '首页' }
    },

    {
        path: "/market",
        name: "market",
        component: () => import("@/views/market/Market"),
        meta: { isShowBottomTabbar: true, title: '行情' }
    },
    {
        path: "/me",
        name: "me",
        component: () => import("@/views/me/Me"),
        meta: { isShowBottomTabbar: true, title: '个人中心' }
    },
    {
        path: "/",
        name: "",
        redirect: "/home"
    }
]

export default tabbar;
