import {ADD_SEARCH} from '../actions/actionTypes';
//import {data} from '../data/Data'
const data = [{id:1, name:'estela'},{id:2, name:'sofia'}]
const defaultState = [];

export default function (state = defaultState, { type, payload }) {
    switch (type){
      case ADD_SEARCH:{
        if (!payload) {
          return [];
      }
        const expRegular = new RegExp(`^${payload}`, 'i')
          return data.filter(a=>expRegular.test(a.name))
      }
      default:
        return state
    } 
}