/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 12:27:57
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 10:20:49
 * @Description:请求服务地址配置
 */
const isProduction = process.env.NODE_ENV === "production";
// 请求数据地址
const url = isProduction
  ? "https://github.com/jackchen0120/"
  : "http://localhost:8088";
const apiUrl = url + "/api";
export { apiUrl, url };
