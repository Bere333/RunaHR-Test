import {ADD_SEARCH} from '../actions/actionTypes';
//import {data} from '../data/Data'
const data = [{
  associatedCMEID: "2016-09-02T06:18:00-CME-001",
catalog: "SWRC_CATALOG",
halfAngle: 27,
isMostAccurate: true,
latitude: 35,
longitude: -87,
note: "",
speed: 218,
time21_5: "2016-09-02T19:15Z",
type: "S"
}]
const defaultState = [];

export default function (state = defaultState, action) {
    switch (action.type){
      case ADD_SEARCH:{
        const expRegular = new RegExp(`^${action.payload}`, 'i')
          return data.filter(element=>expRegular.test(element.speed))
      }
      default:
        return state
    } 
}