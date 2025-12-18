import { Component } from "react";
import hello from "./index.module.css";

export default class Hello extends Component {
  render() {
    return <h2 id={hello.title}>hello,react</h2>;
  }
}
