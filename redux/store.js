import { createStore } from "redux";
import reducer from "./reducers/index";

export default function combineStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
