import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../views/View-Data/Search.scss';
import getResults from '../actions/getResults';

class BarSearch extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(text) {
        const {
            getResults
        } = this.props;

        this.setState({ text });

        getResults(text);

        
    }

    render(){
        const {
            text,
        } = this.state;
        return(
            <div>
                <button className="btn-search">
                            <i className="fas fa-search"></i>
                    </button>
                    <input 
                        placeholder="Buscar por año, velocidad o ángulo de la CME" 
                        className="input-search"
                        text={text}
                        onChange={this.onChangeInput}
                      
                    />

            </div>
        )
    }
}

const mapDispatchToProps = {
    getResults
};

export default connect(null, mapDispatchToProps)(BarSearch);
