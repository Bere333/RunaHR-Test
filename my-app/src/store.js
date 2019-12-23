import { combineReducers, createStore, applyMiddleware} from 'redux';
import results from './reducers/results';
import data from './reducers/data';
import thunk from 'redux-thunk';



import { routerReducer } from 'react-router-redux';

export default createStore(combineReducers({
    results,
    data,
    routing: routerReducer,
}), applyMiddleware(thunk));