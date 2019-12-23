import { combineReducers, createStore } from 'redux';
import suggestions from './reducers/suggestions';
import results from './reducers/results';
import currentItem from './reducers/currentItem'
import { routerReducer } from 'react-router-redux';

export default createStore(combineReducers({
    suggestions,
    results,
    currentItem,
    routing: routerReducer,
}));