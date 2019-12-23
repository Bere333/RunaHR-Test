import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../views/View-Data/Search.scss';
import {getData} from '../actions/getdata'
//import getResults from '../actions/getResults';

class ShowData extends Component{
    componentDidMount() {
        this.props.dispatch(getData())
      }
      renderdata() {
        return this.props.data.map((x) => {
          return (
              
            <div key={x.associatedCMEID} className="box-cme">
                <h1 key={x.associatedCMEID}>Tipo: {x.type}</h1>
                <p>
                    Catálogo: {x.catalog} <br></br>
                    Latitud: {x.latitude} <br></br>
                    Longitud: {x.longitude}<br></br>
                    Velocidad: {x.speed}<br></br>
                    Fecha: {x.time21_5}<br></br>
                    Notas: {x.note}<br></br>
                </p>
            </div> 
              
          )
        })
      }
     
    render(){
        const isEmpty =  this.props.data === 0;
        return(
            <Fragment>
                <div className="box-all">
                {isEmpty?<h1>Cargando resultados <i className="fas fa-spinner fa-pulse"></i></h1>: this.renderdata()}

                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state.data.list
    }
  }
  const mapDispatchToProps = dispatch => ({
    dispatch                
 })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowData)