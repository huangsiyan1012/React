import { nanoid } from "nanoid";
import { Component } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    console.log(personObj);
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h1>上面组件求和为：{this.props.count}</h1>
        <input
          ref={(curNode) => (this.nameNode = curNode)}
          type="text"
          placeholder="请输入名字"
        />
        <input
          ref={(curNode) => (this.ageNode = curNode)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.person.map((personObj) => {
            return (
              <li key={personObj.id}>
                姓名:{personObj.name}- 年龄：{personObj.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ person: state.person, count: state.count }),
  {
    addPerson: createAddPersonAction,
  }
)(Person);
