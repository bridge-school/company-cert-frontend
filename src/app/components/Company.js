import React from 'react';
import { connect } from 'react-redux';
import getCompanyData from '../store/actions/getCompanyData';

class Company extends React.Component {
  componentDidMount() {
    const { match, getCompanyData } = this.props; // eslint-disable-line
    getCompanyData(match.params.id);
  }

  render() {
    const { match, companyData } = this.props; // eslint-disable-line
    return (
      <div>
        <h1>
          Company id:
          {match.params.id}
        </h1>
        {companyData && <p>Company name: {companyData.name}</p>}
        {/* here goes the beautiful design for this page */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCompanyData: companyId => dispatch(getCompanyData(companyId))
});

const mapStateToProps = ({ company: { getCompanySuccess, companyData, companyId } }) => {
  return {
    getCompanySuccess,
    companyData,
    companyId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
