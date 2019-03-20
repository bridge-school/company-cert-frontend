import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCompanyData from '../store/actions/getCompanyData';
import CheckedParagraph from './typography/CheckedParagraph';
import UncheckedParagraph from './typography/UncheckedParagraph';
import Tag from './Tag';
import Card from './Card';
import Error from './ErrorPage';

// checkedItems and uncheckedItems are doing the exact opposite
// checkedItems filters the complete list of checklist items and returns the ones that have been checked
const checkedItems = (completeChecklist, checkedIds) =>
  completeChecklist.length && checkedIds
    ? completeChecklist.filter(checklistItem => checkedIds.includes(checklistItem.id))
    : [];

// uncheckedItems filters the complete list of checklist items and returns the ones that haven't been checked
const uncheckedItems = (completeChecklist, uncheckedIds) =>
  completeChecklist.length && uncheckedIds
    ? completeChecklist.filter(checklistItem => !uncheckedIds.includes(checklistItem.id))
    : completeChecklist;

const styles = {
  section: {
    marginBottom: 30
  },
  subheading: {
    fontSize: '1rem',
    textAlign: 'center'
  },
  divider: {
    margin: '1rem 2rem 2rem'
  },
  centerText: {
    textAlign: 'center'
  }
};

class Company extends React.Component {
  componentDidMount() {
    const { match, getCompanyData } = this.props; // eslint-disable-line
    getCompanyData(match.params.id);
  }

  render() {
    const {
      companyData,
      checklist,
      companyMatches,
      getCompanySuccess,
      getCompanyMatchesFailure,
      classes: { section, centerText, subheading, divider }
    } = this.props;
    if (!getCompanySuccess) return <Error errorType="company" />;
    const scorePercentage = Math.round((companyData.score / checklist.length) * 100);
    return (
      <Grid item xs={10} sm={8} md={6}>
        <h1 className={subheading}>Bridge Company Certification</h1>
        <h2 className={centerText}>{companyData.name}</h2>
        <h3 className={subheading}> Company Status:</h3>
        <Grid container justify="space-between">
          {companyData.score > 5 ? (
            <CheckedParagraph text="Certified!" />
          ) : (
              <UncheckedParagraph text="Not Certified" />
            )}
          <p>Score: {scorePercentage}%</p>
        </Grid>
        <Divider variant="middle" className={divider} />
        <div className={section}>
          {checkedItems(checklist, companyData.checked_checklist_ids).map(item => (
            <CheckedParagraph key={item.id} text={item.name} />
          ))}
        </div>
        <div className={section}>
          {uncheckedItems(checklist, companyData.checked_checklist_ids).map(item => (
            <UncheckedParagraph key={item.id} text={item.name} />
          ))}
        </div>
        <div className={section}>
          <Typography variant="overline" gutterBottom>
            Industry
          </Typography>
          {companyData &&
            companyData.industry &&
            companyData.industry.map(tag => <Tag label={tag.label} key={tag.value} />)}
        </div>
        <div className={section}>
          <Typography variant="overline" gutterBottom>
            Tech
          </Typography>
          {companyData &&
            companyData.tech &&
            companyData.tech.map(tag => <Tag label={tag.label} key={tag.value} />)}
        </div>
        <Typography variant="overline" gutterBottom>
          {companyMatches.length} Match
          {companyMatches.length > 1 || companyMatches.length === 0 ? 'es' : null}
        </Typography>
        {getCompanyMatchesFailure ? (
          <Error />
        ) : (
          companyMatches.map(match => (
            <Link to={`/students/${match.id}`} key={match.id}>
              <Card data={match} tags={[...match.tech, ...match.industry]} />
            </Link>
          ))
        )}
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCompanyData: companyId => dispatch(getCompanyData(companyId))
});

const mapStateToProps = ({
  company: { getCompanySuccess, companyData, companyId, companyMatches, getCompanyMatchesFailure },
  frontendData: { checklist }
}) => {
  return {
    getCompanySuccess,
    companyData,
    companyId,
    checklist,
    companyMatches,
    getCompanyMatchesFailure
  };
};

const StyledCompany = withStyles(styles)(Company);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledCompany);
