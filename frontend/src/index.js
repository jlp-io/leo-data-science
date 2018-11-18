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
		<button className="button-fancy">
        <Link to={`/`}>App</Link>
		</button>
		<button className="button-fancy">
        <Link to={`/about`}>About</Link>
		</button>
      </aside>
      <main>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();