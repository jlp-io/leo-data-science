import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import { Grid, PageHeader, Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter, Link, Route, BrowserRouter} from 'react-router-dom'
import ButtonJS from './Button'

class About extends Component {

  constructor(props) {
	  super(props)
	  this.state = {
 		  metadataFile: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/618557/SFR18_2017_metadata.txt'
	  }
  }
  
  render() {
    console.log('routerProps' + this.props.isAuthed);
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
                <h3>
					About our project
                </h3>
				<small>
					The LEO dataset visualizes earnings outcomes with a methodology that is fundamentally different than conventional approaches like the DLHE survey, which rely on
					unverified survey data with low sample sizes to inform prospective undergraduates and policymakers about the performance of our higher education sector.
				</small>
				<br></br>
				<small>
					We hope that building a website where this information can be easily viewed that people will be more informed when comparing different university courses.
				</small>
            </Col>			
          </Row>
		  
		  <p style ={{textAlign: "center"}}>
		  <embed src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/718225/SFR_18_2017_LEO_mainText.pdf" width="700" height="600" type='application/pdf' />
  		  <embed src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/690861/SFR15_2018_Methodology.pdf" width="700" height="600" type='application/pdf' />
		  </p>
		  
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

export default About;