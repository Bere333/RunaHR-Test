import React, {Fragment} from 'react';
//import { connect } from "react-redux";
//import { addSearch } from '../actions/actions';
//import {loadData} from '../actions/actionCreators';
//import {loadSuggestions} from '../actions/getSuggestions'

function AddSearch(props){
  const {
    results,
  } = props
  
  const isEmpty = results.length === 0;
      return (
        <Fragment>
          <div className="box-target">
            <div>
                <button className="btn-search">
                        <i className="fas fa-search"></i>
                </button>
                <input 
                    placeholder="Buscar por año, velocidad o ángulo de la CME" 
                    className="input-search"
                  
                />
            </div>
            <div className="box-result">
              {isEmpty?<h1>No hay resultados</h1>:results.map(x=>
                <div
                key={x.associatedCMEID}
                className="target-info"
                ></div>
              )}
            </div>

          </div>
        </Fragment>

      )
    }

  
    export default AddSearch;



