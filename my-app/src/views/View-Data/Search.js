import React, { Component } from 'react';
import './Search.scss'

import Navbar from '../Utils/Navbar/Navbar';
// import Option from '../Utils/Select/Option';



class Search extends Component {
    render() {
    return (
        <section className="section-search">
            <div>
                <Navbar/>
            </div>
            
            <div className="box-search">
                <div>
                    {/* <i className="fas fa-search"></i> */}
                    <button><i className="fas fa-search"></i></button>
                    <input placeholder="Buscar por año, velocidad o ángulo de la CME" className="input-search"></input>
                </div>
            </div>
           
           
        </section>
    )
}}

export default Search;