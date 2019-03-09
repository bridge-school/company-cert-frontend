import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import getCompaniesData from '../store/actions/getCompaniesData';
import CompanyCard from './CompanyCard';
import SecondaryNav from './SecondaryNav';

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
          <SecondaryNav />
          <div style={{ marginTop: '120px' }}>{this.renderCompaniesList()}</div>
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
