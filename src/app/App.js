import React, { Component } from 'react';
import Header from './components/Header';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Home"/>
      </div>
    );
  }
}

export default App;
