/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 11:42:27
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-14 19:24:16
 * @Description:store函数导出
 */
import { logout, login, register } from "./auth";
import { saveUserInfo, clearUserInfo } from "./user";
export { logout, register, login, saveUserInfo, clearUserInfo };
