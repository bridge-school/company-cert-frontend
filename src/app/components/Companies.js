import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import getCompaniesData from '../store/actions/getCompaniesData';
import Card from './Card';
import { Link } from 'react-router-dom';
import SecondaryNav from './SecondaryNav';

class Companies extends React.Component {
  componentDidMount() {
    const { getCompaniesData } = this.props;
    getCompaniesData();
  }

  renderCompaniesList() {
    const { companies, checklist, showOnlyCertified } = this.props;
    return companies.map(company => {
      return (
        <Link
          to={`companies/${company.id}`}
          key={company.id}
          style={{ display: showOnlyCertified && company.score < 6 ? 'none' : 'block' }}
        >
          <Card data={company} total={checklist.length} />
        </Link>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <SecondaryNav />
        <Grid item xs={10} sm={8} md={6}>
          <div style={{ marginTop: '120px' }}>{this.renderCompaniesList()}</div>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies.data,
    checklist: state.frontendData.checklist,
    showOnlyCertified: state.companies.showOnlyCertified
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
