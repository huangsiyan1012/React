import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 创建根节点
const root = ReactDOM.createRoot(document.getElementById("root"));

// 渲染应用
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
