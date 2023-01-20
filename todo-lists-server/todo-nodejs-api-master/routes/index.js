/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-18 19:44:30
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-20 17:13:43
 * @Description:路由配置汇总和自定义统一异常处理
 */
const express = require("express");
// const boom = require('boom'); // 引入boom模块，处理程序异常状态
const userRouter = require("./users"); // 引入user路由模块
const taskRouter = require("./tasks"); // 引入task路由模块
const { jwtAuth, decode } = require("../utils/user-jwt"); // 引入jwt认证函数
const router = express.Router(); // 注册路由

router.use(jwtAuth); // 注入认证模块

router.use("/api", userRouter); // 注入用户路由模块
router.use("/api", taskRouter); // 注入任务路由模块

// 自定义统一异常处理中间件，需要放在代码最后
router.use((err, req, res, next) => {
  // 自定义用户认证失败的错误返回
  console.log("err===", err);
  if (err && err.name === "UnauthorizedError") {
    const { status = 401, message } = err;
    // 抛出401异常
    res.status(status).json({
      code: status,
      msg: "token失效，请重新登录",
      data: null,
    });
  } else {
    const { output } = err || {};
    // 错误码和错误信息
    const errCode = (output && output.statusCode) || 500;
    const errMsg =
      (output && output.payload && output.payload.error) || err.message;
    res.status(errCode).json({
      code: errCode,
      msg: errMsg,
    });
  }
});

module.exports = router;
