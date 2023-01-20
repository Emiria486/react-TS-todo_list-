/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 10:18:24
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 11:16:31
 * @Description:
 */
import * as types from "../actionTypes";

const initUserInfo = {
  data: {},
  isLogined: false,
};

export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        data: action.data,
        isLogined: true,
      };
    case types.MODIFY_USER_INFO:
      return {
        ...state,
        data: Object.assign(state.data, action.data),
      };
    case types.CLEAR_USER_INFO:
      return {
        data: {},
        isLogined: false,
      };
    default:
      return state;
  }
}
