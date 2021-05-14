/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2020-07-17 23:17:58
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-22 10:43:22
 * @Deprecated: 否
 * @FilePath: /vue3-h5/src/router/modules/login.router.js
 */

const routers = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/Login"),
        meta: {  title: '登录' }
    },
]

export default routers;

