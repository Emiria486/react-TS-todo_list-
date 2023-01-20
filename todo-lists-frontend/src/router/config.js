/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-12 14:46:38
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-12 19:30:07
 * @Description:路由配置
 */
import Login from "../views/Login.tsx";
import Home from "../views/Home.tsx";
import NotFound from "../components/404.tsx";
export const routerConfig = [
  { path: "/", component: Home, auth: true },
  { path: "/login", component: Login },
  { path: "/404", component: NotFound, auth: true },
];
