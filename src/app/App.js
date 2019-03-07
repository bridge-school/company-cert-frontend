import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/App.css';

import Header from './components/Header';

import Main from './components/Main';
import updateFrontendData from './store/actions/updateFrontendData';

class App extends Component {
  componentDidMount() {
    this.props.updateFrontendData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Home" />
          <Main />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  updateFrontendData
};

export default connect(
  null,
  mapDispatchToProps
)(App);
