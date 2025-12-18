// 引入React
import { Component } from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
// 创建类式App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    );
  }
}
