import React, { Component } from 'react';
import '../assets/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

//firebase
import firebase from 'firebase';
// Required for side-effects
require("firebase/firestore");


class App extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDSPa0f8VuxemCZG3J8Xjvax4skoA0OUnw",
      authDomain: "bridge-cert-app.firebaseapp.com",
      databaseURL: "https://bridge-cert-app.firebaseio.com",
      projectId: "bridge-cert-app",
      storageBucket: "bridge-cert-app.appspot.com",
      messagingSenderId: "1074957427151"
    };
    firebase.initializeApp(config);
  }
  
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
