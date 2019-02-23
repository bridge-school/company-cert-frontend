import React, { Component } from 'react';
import '../assets/App.css';
import { Route, Switch } from 'react-router-dom';

import Header from '././components/Header';

import routes from './router/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Home"/>
          <Switch>
            {
              routes.map(({path, component, exact}, i) => {
                return <Route key={i} exact={exact} path={path} component={component} />
              })
            }
          </Switch>
      </div>
    );
  }
}

export default App;
