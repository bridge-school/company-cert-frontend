import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../router/routes';
import Wrapper from './Wrapper';
import ScrollToTop from './ScrollToTop';

const Main = () => (
  <ScrollToTop>
    <Wrapper>
      <Switch>
        {routes.map(({ path, component, exact }, i) => {
          return <Route key={i} exact={exact} path={path} component={component} />;
        })}
      </Switch>
    </Wrapper>
  </ScrollToTop>
);

export default Main;
