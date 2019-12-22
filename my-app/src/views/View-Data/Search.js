import React, { Component } from 'react';
import './Search.scss';

import Navbar from '../Utils/Navbar/Navbar';
import AddSearch from '../../components/AddSearch';




class Search extends Component {
    render() {
    return (
        <section className="section-search">
            <div>
                <Navbar/>
            </div>
            
            <div className="box-search">
                <AddSearch></AddSearch>
            </div>
           
           
        </section>
    )
}}
export default Search;

