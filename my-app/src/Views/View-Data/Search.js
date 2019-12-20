import React, { Component } from 'react';
import './Search.scss'

import Navbar from '../Utils/Navbar/Navbar'


class Search extends Component {
    render() {
    return (
        <section className="section-search">
            <div>
                <Navbar/>
            </div>
            <div>
                <p className="text-search"><i class="fas fa-search"></i> Buscar CME</p>
                
            </div>
           
           
        </section>
    )
}}

export default Search;