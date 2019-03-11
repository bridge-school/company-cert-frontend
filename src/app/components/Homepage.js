import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Wrapper from './Wrapper';
import CompanyForm from '../containers/CompanyForm';
import { resetAction } from '../store/actions/submitCompanyForm';

const Homepage = ({ companyId, postSuccess, reset }) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <Wrapper>
      <Grid item xs={10} sm={8} md={6}>
        <h1>Bridge Company Certification</h1>
        <CompanyForm />
        {postSuccess && <Redirect to={`/companies/${companyId}`} />}
      </Grid>
    </Wrapper>
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
