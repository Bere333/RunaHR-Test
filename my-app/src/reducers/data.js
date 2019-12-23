import { GET_DATA } from '../actions/actionTypes'

const initialState = {
    data: []
}

export default function showUsers(state = initialState, action) {
    
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {data: action.payload})
        default:
            return state 
    }
    
}