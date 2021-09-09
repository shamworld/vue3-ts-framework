/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-06-26 22:07:29
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-06 16:49:55
 * @Deprecated: 否
 * @FilePath: /WKEX/src/api/http.ts
 */
import axios, { AxiosRequestConfig } from 'axios';
import { RootObject } from '../model/resultData';
import router from '../router';
import { Toast } from 'vant';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 50000
  // withCredentials: true // send cookies when cross-domain requests
});
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    config.headers['lang'] = localStorage.lang == 'jp' ? 'ja' : 'zh-CN';
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('wkexToken');
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// axios.interceptors.response.use(
//   (resp: AxiosResponse<RootObject>) => {
//     const {  data } = resp
//     const { code, msg } = data
//     if (code && code !== 0) {
//       return Promise.reject(data)
//     }
//     return resp
//   },
//   (e: AxiosError) => {
//
//   }
// )

const request = async <T = any>(config: AxiosRequestConfig): Promise<RootObject<T>> => {
  try {
    Toast.clear();
    const { data } = await http.request<RootObject<T>>(config);
    return data;
  } catch (err) {
    Toast.clear();

    if (err.response.status == '9001') {
      router.push({ path: '/login' });
    } if (err.response.data.code == '500100') {
      router.push({ path: '/login' });
    }

    Toast(err.response.data.msg ? err.response.data.msg : err);
    return Promise.reject(err);
  }
};

export default request;
