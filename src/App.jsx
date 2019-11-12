/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

*/

import React, { Component } from 'react';
import Button from './components/Button.jsx';

class App extends Component {
	
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    alert("The button was clicked");
  }
  
  
  render() {
    return (
      <div className="App">
	  
        <header className="App-header">
          <h1 className="App-title">GitHub Analytics</h1>
        </header>
		
        <p className="App-intro">
          Watch this space...
        </p>
		
        <Button handleClick={this.handleClick}/>
		
      </div>
    );
  }
}export default App;