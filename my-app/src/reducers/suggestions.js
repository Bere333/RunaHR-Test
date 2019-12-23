//import {ADD_SEARCH} from '../actions/actionTypes';
import {data} from '../data/Data'
import {ADD_SUGGESTIONS} from '../actions/actionTypes'

const defaultState = [];


  export default function getSuggestions(state = defaultState, action) {
      switch (action.type){
        case ADD_SUGGESTIONS:{
          const expRegular = new RegExp(`^${action.payload}`, 'i')
          return data.then(array => {array.filter(element=>{console.log(element);
           return expRegular.test(element.speed)})})
        }
        default:
          return state
      } 
  }
 
