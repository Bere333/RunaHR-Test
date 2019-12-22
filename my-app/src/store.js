import { combineReducers, createStore } from "redux";
import rootReducer from "./reducers/todos";
import { routerReducer } from 'react-router-redux';

export default createStore(combineReducers({
    rootReducer,
    routing: routerReducer,
}));