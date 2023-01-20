/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-12 14:46:56
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-13 17:09:02
 * @Description:
 */
import { Route, Redirect } from "react-router-dom";
import store from "@/store";
import React, { Component } from "react";

export default class PermissionAuth extends Component {
  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    const isLogin = store.getState().user.data.token;
    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouterConfig = config.find((v) => v.path === pathname);
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component}></Route>;
    }
    if (isLogin) {
      // 如果是登录状态，想要跳转到登录，重定向到主页
      if (pathname === "/login") {
        return <Redirect to="/"></Redirect>;
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouterConfig) {
          return (
            <Route
              path={pathname}
              component={targetRouterConfig.component}
            ></Route>
          );
        } else {
          // 如果路由不合法，重定向到404页
          return <Redirect to="/404"></Redirect>;
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login"></Redirect>;
      } else {
        // 非登录状态下，路由不合法，重定向至404
        return <Redirect to="404"></Redirect>;
      }
    }
  }
}
