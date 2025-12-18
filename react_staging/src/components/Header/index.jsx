import { nanoid } from "nanoid";
import { Component } from "react";
import "./index.css";

export default class Header extends Component {
  handleKeyUp = (e) => {
    // 添加的不能为空
    if (e.target.value.trim() === "") {
      alert("输入的不能为空!");
      return;
    }
    if (e.keyCode === 13) {
      // 如果按下的是回车
      const addTodo = this.props.addTodo;
      // 触发App组件中定义的回调，把新增的todo值传递过去
      const todoObj = { id: nanoid(), name: e.target.value, done: false };
      addTodo(todoObj);
      // 清空数据
      e.target.value = "";
    }
  };
  render() {
    return (
      <div>
        <div className="todo-header">
          <input
            onKeyUp={this.handleKeyUp}
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
          />
        </div>
      </div>
    );
  }
}
