import  {CURRENT_ITEM} from './actionTypes';

const loadSuggestions = text => {
    return{
        type: CURRENT_ITEM,
        payload:text
    };
}

export default loadSuggestions;