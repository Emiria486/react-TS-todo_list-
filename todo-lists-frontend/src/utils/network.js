/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 12:16:20
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 11:10:01
 * @Description:
 */
// 对axios的二次封装
import { message } from "antd";
import axios from "axios";
import store from "@/store";
import { apiUrl } from "./url";
import { logout } from "@/store/actions";
axios.defaults.headers["Content-Type"] = "application/json";
// 创建axios示例
const service = axios.create({
  baseURL: apiUrl,
  timeout: 6 * 1000,
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getState().user.data.token) {
      config.headers["Authorization"] = store.getState().user.data.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response.data);
    // 抛出401错误，因为token失效，重新刷新页面清空缓存，跳转到登录页面
    if (response.data.code === 401 || response.data.code === 403) {
      console.log("退出登录");
      store.dispatch(logout());
      message.error("token失效，或长时间未操作，请重新登录");
      return response.data;
    }
    return response.data;
  },
  (error) => {
    console.log("error===", error.response);
    const { status } = error.response;
    if (status === 401 || status === 403) {
      store.dispatch(logout());
      message.error("token失效，或长时间未操作，请重新登录");
    } else {
      message.error("网络异常，请稍后再试");
    }
    return Promise.reject(error);
  }
);
export default service;
