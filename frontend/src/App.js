import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ParserForParameter from "./parseForParameters.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'jquery/dist/jquery.js';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import 'react-bootstrap-typeahead/dist/react-bootstrap-typeahead.js'
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import { Grid, PageHeader, Form, Row, Col, Button } from 'react-bootstrap'
import drayMyPlot from './LineGraph.js'
import ButtonJS from './Button'
import About from './About'
import InputBlock from './InputBlock'
import { BrowserRouter as Router, withRouter, Link, Route } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Graph from './Graph'
import drawMyPlot from './LineGraph.js';

class App extends Component {

  constructor(props) {
	  super(props)
	  this.state = {
		  searchType: "",
		  university: false,
		  subject: false,
		  metadataFile: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/618557/SFR18_2017_metadata.txt'
	  }
  }
  
  componentDidMount() {
	  //axios test
 	  axios.get('https://api.github.com/users/jlp-io/orgs').then(function(response) { console.log(response.data)});
  }

  changeSearchType(changeSearch) {
	  if (changeSearch == 'singleSearch') {
		this.setState({searchType: 'single'});
		this.setState({university: 'true'});
		this.setState({subject: 'true'});
	  }
	  if (changeSearch == 'courseSearch') {
		this.setState({searchType: 'course'});
		this.setState({university: 'false'});
		this.setState({subject: 'true'});
	  }
	  if (changeSearch == 'universitySearch') {
		this.setState({searchType: 'university'});
		this.setState({university: 'true'});
		this.setState({subject: 'false'});
	  }
  }
  render() {
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
				<InputBlock university={'true'} subject={'false'} />								
				<InputBlock university={'false'} subject={'true'} />	
				<div id="plotme" className="Graph"><Link to={`/graph`}><button className="button-fancy" type="submit">Submit</button></Link></div>
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
	  );
  }
}

export default App;