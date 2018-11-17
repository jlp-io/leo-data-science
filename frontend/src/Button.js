import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import './App.css'

class Button extends Component {
  render() {
    return (
	<Router>
      <Route
        render={({ history }) => (
          <button
            className={this.props.className}
            type="button"
            onClick={() => {
                history.push('/' + this.props.url)
            }}
          >
            {this.props.name}
          </button>
        )}
      />
	</Router>
    )
  }
}

export default Button