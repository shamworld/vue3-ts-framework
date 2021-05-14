/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 10:46:56
 * @LastEditors: Roy
 * @LastEditTime: 2021-03-26 15:17:25
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework/src/store/index.ts
 */
import { createStore } from 'vuex'
import sms, { SMSProps } from './modules/sms.store'
import user, { UserInfo } from './modules/user.store'

export interface GlobalDataProps {
  user: UserInfo;
  sms:SMSProps
}



export default createStore({
  modules: {
    user,
    sms,
  }
})
