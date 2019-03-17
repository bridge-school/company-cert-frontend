import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import getCompaniesData from '../store/actions/getCompaniesData';
import Card from './Card';
import SecondaryNav from './SecondaryNav';

const chooseRandomTags = (tagsArray, n) => {
  // Shuffle array
  const shuffled = tagsArray.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, n);

  return selected;
};

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
          style={{
            display: showOnlyCertified && !(company.score / 13 > 0.6) ? 'none' : 'block'
          }}
        >
          <Card
            data={company}
            tags={[...chooseRandomTags(company.tech, 3), ...chooseRandomTags(company.industry, 2)]}
            total={checklist.length}
          />
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
