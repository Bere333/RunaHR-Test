//Accion creator para ir a resultados
import  {ADD_SEARCH} from './actionTypes';

const getResults = text => {
    return{
        type: ADD_SEARCH,
        payload:text
    };
}

export default getResults;