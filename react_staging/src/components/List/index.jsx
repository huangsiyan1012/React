import PropTypes from "prop-types";
import { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  // 对接收的props进行类型和必要性的限制
  static propTypes = {
    // 接收方法 必需
    todo: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo } = this.props;
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item key={todo.id} {...todo} updateTodo={updateTodo}></Item>
            );
          })}
        </ul>
      </div>
    );
  }
}
