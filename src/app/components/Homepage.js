import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';

import CompanyForm from '../containers/CompanyForm';
import store from '../store/store';

const Homepage = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <h1>Bridge Company Certification</h1>
        <Provider store={store}>
          <CompanyForm />
        </Provider>
      </Grid>
    </Grid>
  );
};

export default Homepage;
