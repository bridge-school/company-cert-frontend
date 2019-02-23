import React, { Component } from 'react';
import Header from '././components/Header';
import '../assets/App.css';

import { Homepage } from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Home"/>
        <Homepage />
      </div>
    );
  }
}

export default App;
