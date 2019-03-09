import React from 'react';
import { connect } from 'react-redux';
import getCompaniesData from '../store/actions/getCompaniesData';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

// Styles
const centerText = { textAlign: 'center' };
const tagStyle = { height: '25px', marginRight: '5px', backgroundColor: '#65B8DE' };

// Helper function
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
    const { companies } = this.props;
    return companies.map((company, index) => {
      return (
        <div key={index} style={{ height: '100px' }}>
          <h4 style={{ ...centerText, margin: '0 0 20px' }}>
            <a href={'/companies/' + company.id}>{company.name}</a>
          </h4>
          <div style={{ ...centerText }}>
            {/*Displays 3 tech tags*/}
            {chooseRandomTags(company.tech, 3).map(tag => (
              <Chip label={tag.label} key={tag.value} style={tagStyle} />
            ))}
            {/*Displays 2 industry tags*/}
            {chooseRandomTags(company.industry, 2).map(tag => (
              <Chip label={tag.label} key={tag.value} style={tagStyle} />
            ))}
          </div>
          <Divider style={{ margin: '20px' }} />
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <h1 style={{ ...centerText, fontSize: '1rem' }}>Bridge Company Certification</h1>
          {/*This is where the toggle buttons will go*/}
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
