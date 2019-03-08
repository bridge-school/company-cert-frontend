import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CompanyForm from '../containers/CompanyForm';
import { resetAction } from '../store/actions/submitCompanyForm';

const Homepage = ({ companyId, postSuccess, reset }) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <h1>Bridge Company Certification</h1>
        <CompanyForm />
      </Grid>
      {postSuccess && <Redirect to={`/companies/${companyId}`} />}
    </Grid>
  );
};

const mapDispatchToProps = {
  reset: resetAction
};

const mapStateToProps = ({ company: { postSuccess, companyId } }) => {
  return {
    postSuccess,
    companyId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
