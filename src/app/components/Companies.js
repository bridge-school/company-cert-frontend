import React from 'react';
import { connect } from 'react-redux';
import getCompaniesData from '../store/actions/getCompaniesData';

class Companies extends React.Component {
  componentDidMount() {
    const { getCompaniesData } = this.props; // eslint-disable-line
    getCompaniesData();
  }

  renderCompaniesList() {
    const { companies } = this.props; // eslint-disable-line
    return companies.map((company, index) => {
      return (
        // placeholder for company cards
        <div key={index}>
          <h4>{company.name}</h4>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ padding: 50 }}>
        <h1>Companies</h1>
        {this.renderCompaniesList()}
      </div>
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
