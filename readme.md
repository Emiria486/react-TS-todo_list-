# 🧨项目构成--プロジェクトの構成：


该项目前端由react16+TS+ant构成，服务器端使用nodeJS+express框架搭建实现，数据库存储由MySql存储。

プロジェクトのフロントエンドはreact16+TS+antで構成され、サーバ側はnodeJS+expressフレームワークを使用して実装され、データベースストレージはMySqlによって格納されます。

# 🎃项目详细介绍--プロジェクトの詳細：

前端：CSS样式使用less书写，使用redux统一管理用户信息，并使用redux-persist实现数据持久化存储。模块化封装路由并配合redux进行动态路由管理，ajax请求使用axios并二次封装减少代码书写量。

フロントエンド: CSS スタイルはレス文字を使用し、redux を使用してユーザー情報を一元的に管理し、redux-persist を使用してデータ永続ストレージを実装します。 モジュール式カプセル化ルートと redux との動的ルーティング管理により、ajax 要求は axios と二次カプセル化を使用してコード書き込みを削減します。

服务器端：服务器框架使用express框架，body-parser解析body请求参数，boom处理错误请求，用户登录注册采用JWT体系，使用express-jwt生成token，并认证是否正确。密码由md5加密处理。使用mysql框架和mysql数据库进行数据交互。

サーバー側:サーバーフレームワークは、expressフレームワークを使用して、body-parserはbody要求パラメータを解決し、boomはエラー要求を処理し、ユーザーはJWTシステムを使用して登録にログインし、express-jwtを使用してtokenを生成し、正しい認証を行います。 パスワードは md5 暗号化によって処理されます。 mysql フレームワークと mysql データベースを使用してデータを操作します。

# 🎇代码感谢--コードのおかげで

[NodeJS全栈开发一个功能完善的Express项目（附完整源码） - 掘金 (juejin.cn)](https://juejin.cn/post/6844904198551666701#heading-17)
