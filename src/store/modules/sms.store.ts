/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2020-07-18 10:20:28
 * @LastEditors: Roy
 * @LastEditTime: 2021-03-26 16:01:53
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework/src/store/modules/sms.store.ts
 */

import { Module } from 'vuex'
import { GlobalDataProps } from '../index'
import { postData } from '../../api/request'
import { Toast } from 'vant'

export interface SMSProps {
    isLogin:boolean;
    obtainState:boolean;
    obtainTime:string;
    obtainTimer:any;
}

const smsProps: SMSProps = {
    isLogin:false,
    obtainState:true,
    obtainTime:'60s',
    obtainTimer:null
}

const sms:Module<SMSProps,GlobalDataProps> = {
    state: {
        ...smsProps
    },
    mutations: {
        setIsLogin(state) {
            state.isLogin = !!window.localStorage.getItem("isLogin_jgj");
        },
        obtainClear(state) {
            clearInterval(state.obtainTimer);
            state.obtainTimer = null;
            state.obtainState = true;
        },
        setObtainState(state,isFlag:boolean) {
            state.obtainState = isFlag;
        }
    },
    actions:{
        sms_codeFun({ commit, state }, obj: object) {
            state.obtainState = false;
            postData('/rest/user/info',obj).then(res => {
                Toast.clear();
                Toast({
                    message: "发送成功",
                    position: "bottom",
                    duration: 2000
                });
                state.obtainTime = "60s";
                var count:number = parseInt(state.obtainTime.split("s")[0]);
                state.obtainTimer = setInterval(() => {
                    count--;
                    state.obtainTime = count + "s";
                    if (count <= 0) commit("obtainClear");
                }, 1000);
            }).catch(err => {
                state.obtainState = true;
            });
        }
    }
}

export default sms;
