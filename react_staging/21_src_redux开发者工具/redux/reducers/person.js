import { ADD_PERSON } from "../constant";

const initState = [{ id: "001", name: "默认", age: 18 }]; //初始化状态
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
