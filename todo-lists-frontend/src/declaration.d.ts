/* 为什么有声明文件呢? 
因为TS直接引用第三方JS库的时候，虽然可以用，但是是没有类型检查，
所以我们需要做一个声明文件，来声明这些第三方库的类型，这样在使用第三方库的时候，就有类型了 */
declare module "react-router-dom";
declare module "react-redux";
declare module "react-document-title";
