//Accion creator para ir a resultados
import  {ADD_SEARCH} from './actionTypes';

const loadData = id => {
    return{
        type: ADD_SEARCH,
        payload:id
    };
}

export default loadData;