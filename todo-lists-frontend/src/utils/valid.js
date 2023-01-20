/*
 * @Author: tetu137 刘永杰
 * @Date: 2023-01-11 12:15:54
 * @LastEditors: [you name]
 * @LastEditTime: 2023-01-16 11:03:32
 * @Description:正则表达式验证和格式化
 */
// 表单规则验证
/** 邮箱校验规则
 * @param  {} val 校验值
 * @return boolean 是否符合规则
 */
export const validEmail = (val) => {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);
};
/** 手机号校验规则
 * @param  {} val 校验值
 * @return boolean 是否符合规则
 */
export const validPhone = (val) => {
  return /^1[3456789]\d{9}$/.test(val);
};
/** 密码校验规则
 * @param  {} val 校验值
 * @return boolean 是否符合规则
 */
export const validPass = (val) => {
  return /^[a-zA-Z\d]{8,20}$/.test(val);
};
/** 用户名校验规则
 * @param  {} name 校验值
 * @return boolean 是否符合规则
 */
export const validUserName = (name) => {
  return validEmail(name) || validPhone(name);
};
export function validateMainName2(name) {
  const re = /^[a-zA-Z0-9_-]{1,19}$/;
  return re.test(name);
}

/** 验证码校验规则
 * @param  {} val 校验值
 * @return boolean 是否符合规则
 */
export const validCode = (val) => {
  return /^[0-9]{6}/.test(val);
};
/** 昵称校验规则
 * @param  {} val 校验值
 * @return boolean 是否符合规则
 */
export const userName = (str) => {
  const re = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
  return re.test(str);
};
/** 昵称校验规则
 * @param  {} name 校验值
 * @return boolean 是否符合规则
 */
export const validateNickName = (name) => {
  const re = /^[a-zA-Z0-9\u4E00-\u9FA5]{2,10}$/;
  return re.test(name);
};
/**返回标准yy--mm--dd格式时间字符串
 * @param  {} value
 * @return 时间字符串
 */
export const formateDate = (value) => {
  if (!value) {
    return "";
  }
  let d = new Date(value);
  let year = d.getFullYear();
  let month =
    d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  let day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
  return year + "-" + month + "-" + day;
};
/**返回标准mm--dd--hh时间字符串
 * @Author: tetu137
 * @description:
 * @param {*} value
 * @return {*} mm--dd--hh时间字符串
 */
export const formatTime = (value) => {
  if (!value) {
    return "";
  }
  let d = new Date(value);
  let month = d.getMonth() + 1;
  let day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
  let hour = d.getHours() < 10 ? "0" + d.getHours() : "" + d.getHours();
  return `${month}月${day}日${hour}时`;
};
/**返回小时时间字符串
 * @Author: tetu137
 * @description:
 * @param {*} value
 * @return {*} 小时字符串
 */
export function formatHour(value) {
  if (!value) {
    return "";
  }
  let d = new Date(value);
  // let year = d.getFullYear();
  // let month = d.getMonth() + 1;
  // let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
  let hour = d.getHours();
  return hour;
}
/**距离现在时间字符串
 * @Author: tetu137
 * @description:距离现在时间字符串
 * @param {*} 目标距离时间
 * @return {*} 距离现在时间
 */
export const timeFormNow = (value) => {
  let currentDate = Date.now();
  let timestamp = currentDate - value;
  switch (true) {
    case timestamp > 86400000:
      return `${Math.floor(timestamp / 86400000)}天前`;
    case timestamp > 3600000:
      return `${Math.floor(timestamp / 3600000)}小时前`;
    case timestamp > 60000:
      return `${Math.floor(timestamp / 60000)}分钟前`;
    case timestamp > 1000:
      return `${Math.floor(timestamp / 1000)}秒钟前`;
    default:
    // do nothing
  }
};
export default {
  validEmail,
  validPhone,
  validUserName,
  validCode,
  validPass,
  userName,
  validateNickName,
  formateDate,
  timeFormNow,
  formatHour,
  validateMainName2,
};
