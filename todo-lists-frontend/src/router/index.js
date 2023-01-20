/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 10:25:31
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-13 17:10:36
 * @Description:
 */
import React from "react";
import { Switch } from "react-router-dom";
import { routerConfig } from "./config";
import PermissionAuth from "./permissionAuth";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <PermissionAuth config={routerConfig}></PermissionAuth>
      </Switch>
    );
  }
}
export default Routes;
