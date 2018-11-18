import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ParserForParameter from "./parseForParameters.js";
import InputBlock from "./InputBlock"
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'jquery/dist/jquery.js';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import 'react-bootstrap-typeahead/dist/react-bootstrap-typeahead.js'
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import { Grid, PageHeader, Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter, Link, Route, BrowserRouter} from 'react-router-dom'
import ButtonJS from './Button'
import About from './About'

class App extends Component {

  constructor(props) {
	  super(props)
	  this.state = {
		  searchType: "",
	  }
  }

  changeSearchType(changeSearch) {
	  if (changeSearch == 'singleSearch') {
		this.setState({searchType: 'single'})
		//call form component and pass in searchType as prop
	  }
	  if (changeSearch == 'courseSearch') {
		this.setState({searchType: 'course'})
	  }
	  if (changeSearch == 'universitySearch') {
		this.setState({searchType: 'university'})
		axios.get('https://api.github.com/users/jlp-io/orgs')
		.then(function (response) {
		console.log(response.data);
		})
	  }
  }
  render() {

    //var csvparser = new ParserForParameter();
    //csvparser.getCSVString("SFR18_2017_Institution_subject_data.csv");
    return (
	<header className="App-header">
	<div className="page-body-grey">
        <Grid
          fluid
          className="query-form-center padded-element-shrink round-corners-large solid-background"
        >
          <Row>
            <Col sm={12} md={12} className="bs-center">
              <PageHeader className="page-header-montserrat">
				Longitudinal Education Outcomes: Data Mining and Visualization
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
                <p style={{textAlign: "center"}}>
					Search courses
                </p>
				<p style={{textAlign: "center"}}>
					Search by university
                </p>
                <p style={{textAlign: "center"}}>
					Search by course
                </p>
				
				<p>Search type: {this.state.searchType}</p>
				
				<p>{this.state.currentTime}</p>
				<p style={{textAlign: "center"}}>
				<button className="button-fancy" onClick={()=>this.changeSearchType('singleSearch')}>
					Search courses
                </button>
				<br></br><br></br>
				<button className="button-fancy" onClick={()=>this.changeSearchType('universitySearch')}>
					Search by university
                </button>
				<br></br><br></br>
				<button className="button-fancy" onClick={()=>this.changeSearchType('courseSearch')}>
				Search by course
                </button>
				</p>
				<Button
				bsStyle="danger"
                name="Edit"
                url="output"
				href="https://www.facebook.com"
				>Link
				</Button>
            </Col>
          </Row>
		  
          <Row>
            <Col xs={6} sm={6} md={6}>
            </Col>
            <Col xs={6} sm={6} md={6} className="bs-button-right">
            </Col>
          </Row>
        </Grid>
      </div>
	  </header>
    <InputBlock/>
	  );
  }
}

export default App;