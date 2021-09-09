/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-03-26 11:03:45
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-09 10:43:06
 * @Deprecated: 否
 * @FilePath: /vue-ts-framework1/src/api/request.ts
 */
import axios from "axios";
import router from '../router';
import { Toast } from 'vant'

axios.defaults.headers = {
    "Content-Type": "application/json;charset=utf8",
};

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

//拦截器
axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        Toast.clear();
        return response.data ? response.data : response;
    },
    error => {
        Toast.clear();
        if (error.response.status == '9001') {
            Toast.fail('请先登录');
            router.push({ path: '/login' });
        } else {
            Toast(error.message);
        }
        return Promise.reject(error);
    }
);

export function formateURLOnlyGet(link: string, json: object) {
    let url = link;
    var data = Object.entries(json);

    if (data.length) {
        url += url.indexOf("?") == -1 ? "?" : "";
        url += Object.entries(data)
            .map(item => {
                return item[1].join("=");
            })
            .join("&");
    }
    return url;
}

/**
 * GET请求方法
 * @param {String} url 请求地址
 * @param {json} json 请求参数
 */
export function getData(url: string, json: object) {
    return axios
        .get(formateURLOnlyGet(url, json))
        .then(res => res.data)
        .catch(error => error.response);
}

export function postData(url: string, json?: object) {
    return axios
        .post(url, json)
        .then(res => res.data)
        .catch(error => error.response);
}




