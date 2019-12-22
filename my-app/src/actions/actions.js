import  {ADD_SEARCH} from './actionTypes';

let nextTodoid = 0;

export const addSearch = content => ({
    type : ADD_SEARCH,
    payload:{
        id: ++nextTodoid,
        content
    }
})
