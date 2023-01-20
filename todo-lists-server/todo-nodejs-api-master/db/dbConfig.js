/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-18 19:44:30
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-18 19:47:09
 * @Description:数据库连接配置文件
 */

const mysql = {
  host: "localhost", // 主机名称，一般是本机
  port: "3306", // 数据库的端口号，如果不设置，默认是3306
  user: "root", // 创建数据库时设置用户名
  password: "root", // 创建数据库时设置的密码
  database: "mydb", // 创建的数据库
  connectTimeout: 5000, // 连接超时
};

module.exports = mysql;
