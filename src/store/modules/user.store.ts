/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2020-07-18 10:20:28
 * @LastEditors: Roy
 * @LastEditTime: 2021-03-26 15:44:00
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework/src/store/modules/user.store.ts
 */

import { Module } from 'vuex'
import { GlobalDataProps } from '../index'
import { getData } from '../../api/request'

export interface UserInfo {
    
}



const userInfo: UserInfo = {

}


const user:Module<UserInfo,GlobalDataProps> = {
    state: {
        ...userInfo
    },
    mutations: {
        getUserInfo(state) {
            if (!window.localStorage.getItem("jzg_token")) return;

            getData('/rest/user/info',{}).then(res => {
                state = res.data as UserInfo;
            })
        },
    },
}

export default user;
