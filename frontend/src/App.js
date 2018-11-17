import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import { Grid, PageHeader, Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'

class App extends Component {
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
              <Form>
                <p style={{textAlign: "center"}}>
					Search courses
                </p>
				<p style={{textAlign: "center"}}>
					Search by university
                </p>
                <p style={{textAlign: "center"}}>
					Search by course
                </p>             
				<p style={{textAlign: "center"}}>
				<button className="button-fancy">
					Search courses
                </button>
				<br></br><br></br>
				<button className="button-fancy">
					Search by university
                </button>
				<br></br><br></br>
				<button className="button-fancy">
					Search by course
                </button>
				</p>
              </Form>
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