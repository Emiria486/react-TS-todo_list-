/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-18 19:44:30
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-20 17:24:51
 * @Description:mysql连接和执行语句
 */

const mysql = require("mysql");
const config = require("../db/dbConfig");

// 连接mysql
function connect() {
  const { host, user, password, database } = config;
  return mysql.createConnection({
    host,
    user,
    password,
    database,
  });
}

// 新建查询连接
function querySql(sql) {
  const conn = connect();
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    } catch (e) {
      reject(e);
    } finally {
      // 释放连接
      conn.end();
    }
  });
}

// 查询一条语句
function queryOne(sql) {
  return new Promise((resolve, reject) => {
    querySql(sql)
      .then((res) => {
        console.log("res===", res);
        if (res && res.length > 0) {
          resolve(res[0]);
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  querySql,
  queryOne,
};
