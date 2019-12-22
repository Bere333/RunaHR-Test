import React, { Component } from 'react';
import '../Style.scss';

class Option extends Component {
    render() {
    return (
        <option value="value1" className="text-option">{this.props.value}</option> 
    )
}}

export default Option;