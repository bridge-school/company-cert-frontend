import React from 'react';

import Grid from '@material-ui/core/Grid';

import CompanyForm from '../containers/CompanyForm';

const Homepage = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <h1>Bridge Company Certification</h1>
        <CompanyForm />
      </Grid>
    </Grid>
  );
};

export default Homepage;
