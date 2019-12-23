import { GET_DATA } from '../actions/actionTypes'

const initialState = {
    list: []
}

export function showData(state = initialState, action) {
    
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
    
}