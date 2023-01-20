/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 11:43:01
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 11:07:24
 * @Description:
 */
import { clearUserInfo, saveUserInfo } from "./user";
import { APILoginUser, APIregisterUser } from "@/utils/api";

/**
 * @Author: tetu137
 * @description: store登录
 * @param {*} username 用户名
 * @param {*} password 密码
 * @return {*} promise
 */
export const login = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    APILoginUser({ username: username.trim(), password: password.trim() }).then(
      (res) => {
        console.log("登录===", res);
        if (res.code === 0) {
          dispatch(saveUserInfo(res.data));
          resolve(res);
        } else {
          reject(res.msg);
        }
      }
    );
  });
};
/**
 * @Author: tetu137
 * @description: store注册用户
 * @param {*} username 用户名
 * @param {*} password  密码
 * @return {*}
 */
export const register = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    APIregisterUser({
      username: username.trim(),
      password: password.trim(),
    }).then((res) => {
      console.log("注册===", res);
      if (res.code === 0) {
        dispatch(saveUserInfo(res.data));
        resolve(res);
      } else {
        reject(res.msg);
      }
    });
  });
};
/**
 * @Author: tetu137
 * @description: store清空用户信息
 * @param {*} dispatch
 * @return {*}
 */
export const logout = () => (dispatch) => {
  console.log("logout");
  // 调用函数清空用户信息
  dispatch(clearUserInfo());
  //   跳转到登录页面
  window.location.href = "/login ";
};
