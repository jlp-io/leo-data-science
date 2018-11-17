import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <aside>
        <Link to={`/`}><button className="button-fancy" type="submit">App</button></Link>		
        <Link to={`/about`}><button className="button-fancy" type="submit">About</button></Link>
      </aside>
      <main>
        <Route exact path="/" component={App} />
        <Route path="/about" render={(props) => <About {...props} isAuthed={true} />} /> 
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();