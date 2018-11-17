import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import InputForm from "./inputForm";
import ParserForParameter from "./parseForParameters.js";
import InputBlock from "./InputBlock"
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'jquery/dist/jquery.js';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import 'react-bootstrap-typeahead/dist/react-bootstrap-typeahead.js'
//import fs, {readFileSync} from "fs";

class App extends Component {


  render() {

    //var csvparser = new ParserForParameter();
    //csvparser.getCSVString("SFR18_2017_Institution_subject_data.csv");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <InputBlock/>
      </div>
    );
  }
}

export default App;
