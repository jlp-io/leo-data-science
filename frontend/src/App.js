import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import { Grid, PageHeader, Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter, Link, Route, BrowserRouter} from 'react-router-dom'
import ButtonJS from './Button'
import About from './About'
import InputBlock from './InputBlock'

class App extends Component {

  constructor(props) {
	  super(props)
	  this.state = {
		  searchType: "",
		  university: false,
		  subject: false
	  }
  }

  changeSearchType(changeSearch) {
	  if (changeSearch == 'singleSearch') {
		this.setState({searchType: 'single'});
		this.setState({university: 'true'});
		this.setState({subject: 'true'});
	  }
	  if (changeSearch == 'courseSearch') {
		this.setState({searchType: 'course'})
		this.setState({university: 'false'});
		this.setState({subject: 'true'});
	  }
	  if (changeSearch == 'universitySearch') {
		this.setState({searchType: 'university'})
		axios.get('https://api.github.com/users/jlp-io/orgs')
		.then(function (response) {
		console.log(response.data);
		})
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
		  <InputBlock university={this.state.university} subject={this.state.subject} />
		  <p>{this.state.university}</p>
		  <p>{this.state.subject}</p>
		  
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