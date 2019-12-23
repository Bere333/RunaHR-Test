import React, { Component } from 'react';
import './Search.scss';
import { connect } from "react-redux";
//import getSuggestions from '../../actions/getSuggestions';
import getResults from '../../actions/getResults'

import Navbar from '../Utils/Navbar/Navbar';
import AddSearch from '../../components/AddSearch';




class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
       //
    }
    // onChangeInput (text){
    //     this.setState({text})
    //     this.props.getResults(text)
    //}
    render() {
        const {results} = this.props;
        //const {text} = this.state;
        
        console.log(results);
        //console.log(text);
        
        
    return (
        <section className="section-search">
            <div>
                <Navbar/>
            </div>
            
            <div className="box-search">
                <AddSearch
                    results={results}
                    
                   
                ></AddSearch>
            </div>
            <div className="box-cmes">

            </div>
           
           
        </section>
    )
}}
// const mapDispatchToProps = {
//     getResults
// }
const mapStateToProps = state =>{
    return{
        results: state.results
    }
}

export default connect(mapStateToProps, null)(Search);

