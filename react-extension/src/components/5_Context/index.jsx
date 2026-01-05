import React, { Component } from "react";

const UserNameContext = React.createContext();
const { Provider, Consumer } = UserNameContext;
export default class Demo extends Component {
  state = { username: "tom" };
  render() {
    return (
      <div style={{ background: "orange", width: "50%", height: "400px" }}>
        <h1>祖组件</h1>
        <h4>我的内容：{this.state.username}</h4>
        <Provider value={this.state.username}>
          <Son username={this.state.username}></Son>
        </Provider>
      </div>
    );
  }
}

class Son extends Component {
  render() {
    return (
      <div style={{ background: "skyblue", width: "90%", height: "280px" }}>
        <h1>儿子组件</h1>
        <h4>收到的祖组件的内容：{this.props.username}</h4>
        <Child></Child>
      </div>
    );
  }
}

// 类式组件
/* class Child extends Component {
  static contextType = UserNameContext;

  render() {
    return (
      <div style={{ background: "pink", width: "90%", height: "150px" }}>
        <h1>孙子组件</h1>
        <h4>收到的祖组件的内容：{this.context}</h4>
      </div>
    );
  }
} */

function Child() {
  return (
    <div style={{ background: "pink", width: "90%", height: "150px" }}>
      <h1>孙子组件</h1>
      <h4>
        收到的祖组件的内容：
        <Consumer>
          {(value) => {
            return `${value.username}`;
          }}
        </Consumer>
      </h4>
    </div>
  );
}
