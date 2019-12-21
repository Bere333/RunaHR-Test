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
            <div>
                <div className="box-search">
                    <div>
                        <p>Buscar <i className="fas fa-search"></i></p>
                    </div>
                    <div>
                        <input placeholder="Buscar por año, velocidad o ángulo de la CME" className="input-search"></input>
                    </div>
                </div>
                {/* <div>
                    <div className="box-select">
                        <select className="select">
                            <Option value="Buscar por fecha" className="text-option">Buscar por fecha</Option>
                            <Option value="2019">2019</Option>
                            <Option value="2018">2018</Option>
                        </select>
                        <select className="select">
                            <Option value="Buscar por velocidad" className="text-option">Buscar por velocidad</Option>
                            <Option value="~200">200</Option>
                            <Option value="~300">300</Option>
                            <Option value="~400">400</Option>
                            <Option value="~500">500</Option>
                            <Option value="~600">600</Option>
                        </select>
                        <select className="select">
                            <Option value="Buscar por ángulo" className="text-option">Buscar por ángulo</Option>
                            <Option value="~20">2019</Option>
                            <Option value="~30">2018</Option>
                        </select>

                    </div>
                    <div> 

                    </div>

                </div>*/}
                
            </div>
           
           
        </section>
    )
}}

export default Search;