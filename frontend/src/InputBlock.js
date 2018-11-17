import React, { Component } from 'react';
import InputForm from "./InputForm";
import ParserForParameter from "./parseForParameters.js";

export default class InputBlock extends Component{
	
	constructor(props){
	super(props);	
    this.state = {
      csvparser: new ParserForParameter(this),
      universities: [],
      subjects: [],
      selected: {"subject": "", "university": ""}
    }
    this.handleFileGet = this.handleFileGet.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelected = this.handleChangeSelected.bind(this);
  }

  handleFileGet(event){
    this.state.csvparser.getCSVString(event.target.files[0]);
  }

  handleChangeSelected(type, newValue){
  	var newSelected = this.state.selected;
  	console.log(type);
  	console.log(newValue);
  	newSelected[type] = newValue;
  	this.setState({
  		selected: newSelected
  	});
  }

  handleSubmit(event){
  	event.preventDefault();
  	var toReturn = this.state.selected;
  	console.log(toReturn);
  	return toReturn;
  }

	rerender(){
    var unis = this.state.csvparser.getUniversities();
    var subs = this.state.csvparser.getSubjects();
    this.setState({
      csvparser: this.state.csvparser,
      universities : unis,
      subjects: subs
    });
  }

	render(){
		let inputForm1;
		let inputForm2;
		if (this.props.university == 'true') {
			inputForm1 = <InputForm selectionParameter = "University" options = {this.state.universities} id = "university" handleSubmitChange = {this.handleChangeSelected}/>;
		}
		if (this.props.subject == 'true') {
			inputForm2 = <InputForm selectionParameter = "Subject" options = {this.state.subjects} id = "subject" handleSubmitChange = {this.handleChangeSelected}/>;
		}
		
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
          		<button type="submit">Submit</button>
				{inputForm1}
				{inputForm2}
				</form>				
		  		<input type="file" onChange={this.handleFileGet} ></input>
			</div>
		);
	}
}