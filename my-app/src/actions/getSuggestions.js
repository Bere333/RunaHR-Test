//Accion creator para ir a sugerencias
import  {ADD_SUGGESTIONS} from './actionTypes';

const loadSuggestions = text => {
    return{
        type: ADD_SUGGESTIONS,
        payload:text
    };
}

export default loadSuggestions;