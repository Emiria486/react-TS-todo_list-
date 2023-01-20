# 🧨项目构成：

该项目前端由react16+TS+ant构成，服务器端使用nodeJS+express框架搭建实现，数据库存储由MySql存储。

# 🎃项目详细介绍

前端：CSS样式使用less书写，使用redux统一管理用户信息，并使用redux-persist实现数据持久化存储。模块化封装路由并配合redux进行动态路由管理，ajax请求使用axios并二次封装减少代码书写量，

服务器端：服务器框架使用express框架，body-parser解析body请求参数，boom处理错误请求，用户登录注册采用JWT体系，使用express-jwt生成token，并认证是否正确。密码由md5加密处理。使用mysql框架和mysql数据库进行数据交互。

# 🎇代码感谢

[NodeJS全栈开发一个功能完善的Express项目（附完整源码） - 掘金 (juejin.cn)](https://juejin.cn/post/6844904198551666701#heading-17)