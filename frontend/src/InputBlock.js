import React, { Component } from 'react';
import InputForm from './InputForm';
import ParserForParameter from "./parseForParameters.js";
import { BrowserRouter as Router, withRouter, Link, Route } from 'react-router-dom';

export default class InputBlock extends Component {
	
	constructor(props){
	super(props);
    this.state = {
      csvparser: new ParserForParameter(this),
      universities: [],
      subjects: [],
      selected: {"subject": "", "university": ""},
      relevantData: {}
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
  	var relData = this.state.csvparser.retrieveData(toReturn);
    console.log(relData);
    this.setState({relevantData: relData});	
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
		let inputForm3;
		let inputForm4;
		if (this.props.university == 'true') {
			inputForm1 = <InputForm selectionParameter = "University" options = {this.state.universities} id = "university" handleSubmitChange = {this.handleChangeSelected}/>;
			inputForm2 = <input type="file" onChange={this.handleFileGet} ></input>
			inputForm3 = <div id="plotme" className="Graph"><Link to={`/graph`}><button className="button-fancy" type="submit">Submit</button></Link></div>
			inputForm4 = <div id="plotme" className="Graph"><Link to={`/graph`}><button className="button-fancy" type="submit">Graph</button></Link></div>
		}
		if (this.props.subject == 'true') {
			inputForm1 = <InputForm selectionParameter = "Subject" options = {this.state.subjects} id = "subject" handleSubmitChange = {this.handleChangeSelected}/>;
			inputForm2 = <input type="file" onChange={this.handleFileGet} ></input>
			inputForm3 = <Link to={`/graph`}><button className="button-fancy-submit" type="submit">Submit</button></Link>
			inputForm4 = <div id="plotme" className="Graph"><Link to={`/graph`}><button className="button-fancy" type="submit">Graph</button></Link></div>
		}
		
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
				{inputForm1}
				{inputForm2}
				{inputForm3}
				{inputForm4}
				</form>					
			</div>
		);
	}
}