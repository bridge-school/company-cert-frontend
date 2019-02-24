import React, { Component } from 'react';
import '../assets/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Home"/>
          <Main />
        </div>
      </Router> 
    );
  }
}

export default App;
