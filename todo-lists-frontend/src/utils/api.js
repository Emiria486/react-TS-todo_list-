/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 12:15:39
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-19 11:39:12
 * @Description: 用于接口调用函数定义
 */

import service from "./network";

/**
 * @Author: tetu137
 * @description: 用户登录接口函数
 * @param {*} data
 * @return {*}
 */
export const APILoginUser = (data) => {
  return service({
    url: "/login",
    method: "post",
    data,
  });
};

/**
 * @Author: tetu137
 * @description:  注册用户接口函数
 * @param {*} data
 * @return {*}
 */
export const APIregisterUser = (data) => {
  return service({
    url: "/register",
    method: "post",
    data,
  });
};

/**重置密码接口函数
 * @Author: tetu137
 * @description: 重置密码
 * @param {*} data 新密码
 * @return {*}
 */
export const APIresetPwd = (data) => {
  return service({
    url: "/resetPwd",
    method: "post",
    data,
  });
};

/**
 * @Author: tetu137
 * @description:
 * @param {*} params
 * @return {*} 获取任务列表接口函数
 */
export const APIqueryTaskList = (params) => {
  return service({
    url: "/queryTaskList",
    method: "get",
    params,
  });
};

/**
 * @Author: tetu137
 * @description:编辑任务接口函数
 * @param {*} data
 * @return {*}
 */
export const APIeditTask = (data) => {
  return service({
    url: "/editTask",
    method: "put",
    data,
  });
};
/**
 * @Author: tetu137
 * @description: 新增任务接口函数
 * @param {*} data
 * @return {*}
 */
export const APIaddTask = (data) => {
  return service({
    url: "/addTask",
    method: "post",
    data,
  });
};

/**
 * @Author: tetu137
 * @description: 操作任务状态
 * @param {*} data
 * @return {*}
 */
export const APIupdateTaskStatus = (data) => {
  return service({
    url: "/updateTaskStatus",
    method: "put",
    data,
  });
};

/**
 * @Author: tetu137
 * @description:点亮红星标记
 * @param {*} data
 * @return {*}
 */
export const APIupdateMark = (data) => {
  return service({
    url: "/updateMark",
    method: "put",
    data,
  });
};

/**
 * @Author: tetu137
 * @description: 删除任务
 * @param {*} data
 * @return {*}
 */
export const APIdeleteTask = (data) => {
  return service({
    url: "/deleteTask",
    method: "delete",
    data,
  });
};
