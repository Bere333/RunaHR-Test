import axios from 'axios'
import {url} from '../constants/url'
import {GET_DATA} from './actionTypes'


export function getData() {
    
    return (dispatch, getState) => {
        axios.get(url)
            .then((response) => {
                dispatch( { 
                    type: GET_DATA, 
                    payload: response.data 
                } ) 
            }) 
            
    }
    
} 