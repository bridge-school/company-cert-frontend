import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import getCompaniesData from '../store/actions/getCompaniesData';
import CompanyCard from './CompanyCard';

class Companies extends React.Component {
  componentDidMount() {
    const { getCompaniesData } = this.props;
    getCompaniesData();
  }

  renderCompaniesList() {
    const { companies } = this.props;
    return companies.map(company => {
      return <CompanyCard key={company.id} {...company} />;
    });
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <h1 style={{ textAlign: 'center', fontSize: '1rem' }}>Bridge Company Certification</h1>
          <Divider variant="middle" style={{ margin: '1rem 2rem 2rem' }} />
          {this.renderCompaniesList()}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompaniesData: () => dispatch(getCompaniesData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
