import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

export default class InputForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			arrayOfOptions : [],
		}
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	handleChangeValue(selected){
		this.props.handleSubmitChange(this.props.id, selected);
	}

	render(){
		var inputsIn = () => {
			var arrayOfOptions = [];
			for(var i = 0; i< this.props.options.length; i++){
				arrayOfOptions.push(<option value = {this.props.options[i]} key = {i}>{this.props.options[i]}</option>);
			}	
			return arrayOfOptions;
		}
		return(
			<div className = "input-group">
				<div className = "input-group-prepend">
					<label className = "input-group-text">{this.props.selectionParameter}</label>
				</div>
				<Typeahead className = "custom-select" onChange = {(selected) => {this.handleChangeValue(selected[0])}} options = {this.props.options}>
				</Typeahead>
			</div>
			);
	}
}
