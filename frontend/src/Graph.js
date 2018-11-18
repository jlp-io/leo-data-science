import React, { Component } from 'react';
import logo from './logo.svg';
import drawMyPlot from './LineGraph.js';

class Graph extends Component {
 render() {
   return (
     <div id="plotme" className="Graph">
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
       <button onClick={drawMyPlot}> Click me </button>
     </div>

   );
 }
}

export default Graph;