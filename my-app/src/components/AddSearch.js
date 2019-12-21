import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSearch } from '../actions/actions';

class AddSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
      }
    updateInput = input => {
        this.setState({ input });
    };
    onChange = e => {
        this.updateInput(e.target.value)
    }
    handleAddTodo = () => {
        this.props.addSearch(this.state.input);
        this.setState({ input: "" });
      };
  
    render() {
      return (
            <div>
                <button className="btn-search" onClick={this.handleAddTodo}>
                    <i className="fas fa-search"></i>
                </button>
                <input 
                    placeholder="Buscar por año, velocidad o ángulo de la CME" 
                    className="input-search"
                    onChange={this.onChange}
                    value={this.state.input}
                />
            </div>

      )
    }}

    export default connect(
        null,
        { addSearch }
      )(AddSearch);


