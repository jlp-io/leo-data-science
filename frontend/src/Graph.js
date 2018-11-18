import React, { Component } from 'react';
import logo from './logo.svg';
import drawMyPlot from './LineGraph.js';

class Graph extends Component {
	
	constructor(props) {
	  super(props)
	  this.state = {
		  hideButton: false
	  }
	}

  
 render() {
   return (
     <div id="plotme" className="Graph">
	 <header className="App-header">
 	   <a href="#" style={{textAlign: "center"}}>
		<button className="button-fancy" onClick={drawMyPlot}> Click me </button>
		</a>
     </header>
     </div>
   );
 }
}

export default Graph;