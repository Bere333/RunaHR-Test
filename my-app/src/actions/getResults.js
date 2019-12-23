//Accion creator para ir a resultados
import  {ADD_SEARCH} from './actionTypes';

const getResults = (text, data )=> {
    return{
        type: ADD_SEARCH,
        payload:text,
        data:data
    };
}

export default getResults;