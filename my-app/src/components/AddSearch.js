import React, {Fragment} from 'react';
import BarSearch from '../components/BarSearch';
import '../views/View-Data/Search.scss';
import ShowData from '../components/ShowData';
//import { connect } from "react-redux";
//import { addSearch } from '../actions/actions';
//import {loadData} from '../actions/actionCreators';
//import {loadSuggestions} from '../actions/getSuggestions'

function AddSearch(props){
  const {
  //   // text,
  //   // onChangeInput,
    results
  } = props
  
 const isEmpty = results.length === 0;
      return (
        <Fragment>
          <div className="box-target">
            <div>
                <BarSearch/>
            </div>
            <div className="box-result">
              {isEmpty?<h1>Cargando resultados <i className="fas fa-spinner fa-pulse"></i></h1>:results.map(x=>
                <div
                key={x.associatedCMEID}
                className="target-info"
                >
                      <h1 key={x.associatedCMEID}>Nombre: {x.note}</h1>
                      <p className="p-text">ID: {x.id}</p>
                </div>
              )}
            </div>
            <ShowData />
          </div>
        </Fragment>

      )
    }

  
    export default AddSearch;



