import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';
import results from './reducers/results';
import currentItem from './reducers/currentItem'
import { routerReducer } from 'react-router-redux';

export default createStore(combineReducers({
    todos,
    results,
    currentItem,
    routing: routerReducer,
}));