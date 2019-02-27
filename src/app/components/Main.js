import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../router/routes';

const Main = () => (
  <div className="wrapper">
    <Switch>
      {routes.map(({ path, component, exact }, i) => {
        return <Route key={i} exact={exact} path={path} component={component} />;
      })}
    </Switch>
  </div>
);

export default Main;
