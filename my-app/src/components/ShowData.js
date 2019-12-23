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
            <div key={x.speed}>
                  <h1 key={x.speed}>Nombre: {x.speed}</h1>
               </div> 
          )
        })
      }
     
    render(){
        //const {data} = this.props
        return(
            <Fragment>
            <div>
                {this.renderdata()}

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
    dispatch                // ← Add this
 })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowData)