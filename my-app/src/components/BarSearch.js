import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../views/View-Data/Search.scss';
import getResults from '../actions/getResults';
import {getData} from '../actions/getdata';

class BarSearch extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getData())
      }

    onChangeInput(text) {
        const {
            getResults
        } = this.props;

        this.setState({ text });

        getResults(text, this.props.data);

        
    }

    render(){
        const {
            text,
        } = this.state;
        return(
            <div>
                {/* <button className="btn-search">
                            <i className="fas fa-search"></i>
                    </button> */}
                    <input 
                        placeholder="🔍 Buscar por año, velocidad o ángulo de la CME" 
                        className="input-search"
                        text={text}
                        onChange={this.onChangeInput}
                      
                    />

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    getResults
})
    

const mapStateToProps = state => {
    return {
      data: state.data.list
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BarSearch);
