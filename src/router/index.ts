/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-05-14 16:51:42
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'



const routerList: Array<RouteRecordRaw> = [];

function importAll(r: any) {
  r.keys().forEach(
    (key: string) => {
      if (!!r(key).default) {
        routerList.push(...r(key).default)
      }

    }
  )
}

importAll(require.context('./modules', true, /\.router\.js$/));
const routes = [
  ...routerList
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 如果没有登录， 在这里到login
  if (!localStorage.isLogin && to.path !== "/" && to.path !== "/login" && to.path !== "/forgetPWD" && to.path !== "/register") {

    return next({ path: '/login' });
  } else {
    next();
  }

})


export default router
