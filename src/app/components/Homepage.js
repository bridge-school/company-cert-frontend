import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { Provider, connect} from 'react-redux';

import CompanyForm from '../containers/CompanyForm';
import store from '../store/store';

import { Redirect } from 'react-router-dom';

const Homepage = ({companyId, postSuccess}) => {

  useEffect(() => {
    return () => {
      console.log('Unmounting');
    };
  });

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6}>
        <h1>Bridge Company Certification</h1>
        <Provider store={store}>
          <CompanyForm />
        </Provider>
      </Grid>
    { postSuccess && <Redirect to={`/companies/${companyId}`}/> }
    </Grid>
  );
};

const mapStateToProps = ({ companyReducer: {postSuccess, companyId} }) => {
  return {
    postSuccess,
    companyId,
  };
};

export default connect(mapStateToProps)(Homepage);

