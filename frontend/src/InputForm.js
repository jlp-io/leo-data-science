import React, { Component } from 'react';

export default class InputForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			arrayOfOptions : [],
		}
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	handleChangeValue(event){
		this.props.handleSubmitChange(this.props.id, event.target.value);
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
				<select className = "custom-select" onChange = {this.handleChangeValue}>
					<option selected>Any</option>
					{inputsIn()}
				</select>
			</div>
			);
	}
}