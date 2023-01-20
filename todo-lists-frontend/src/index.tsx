import * as React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "@/styles/base.less";
import App from "./App";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
// redux-persist会将redux的store中的数据自动缓存到浏览器的 localStorage 中，不再需要单独去存储了。
import { PersistGate } from "redux-persist/lib/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
