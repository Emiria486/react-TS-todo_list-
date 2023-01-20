/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 11:43:44
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 11:28:06
 * @Description:用户信息动作
 */
import * as types from "../actionTypes";

export const clearUserInfo = () => {
  return {
    type: types.CLEAR_USER_INFO,
  };
};

export const saveUserInfo = (data) => {
  return {
    type: types.SET_USER_INFO,
    data,
  };
};
