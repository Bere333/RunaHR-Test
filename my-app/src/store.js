import { createStore } from "redux";
import rootReducer from "./reducers/todos";

export default createStore(rootReducer);