/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-18 19:44:30
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-20 17:24:56
 * @Description:用户密码md5加密函数
 */
const crypto = require("crypto"); // 引入crypto加密模块

function md5(s) {
  return crypto
    .createHash("md5")
    .update("" + s)
    .digest("hex");
}

module.exports = md5;
