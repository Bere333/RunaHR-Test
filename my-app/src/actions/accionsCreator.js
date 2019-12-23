import {DATA_REQUEST, DATA_SUCCESS,DATA_FAILURE} from './actionTypes';
const url = 'https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2019-09-30&catalog=ALL&api_key=1qKDxv55zICsKKnsPKcTHW35m6dROjKl3lYdyxal'


export function loadCME(speed) {
    // Interpreted by the thunk middleware:
    return function(dispatch, getState) {
      const { cmes } = getState()
      if (cmes[speed]) {
        // There is cached data! Don't do anything.
        return
      }
      dispatch({
        type: DATA_REQUEST,
        speed
      })
      // Dispatch vanilla actions asynchronously
      fetch(url)
      .then((response) =>{
            return response.json();
            
          })
      .then(myJson=> 
                dispatch({
                    type: DATA_SUCCESS,
                    cmes,
                    myJson
                }),
                error =>
                    dispatch({
                    type: DATA_FAILURE,
                    speed,
                    error
                    })
        )
     
    }
  }