import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import getCompanyData from '../store/actions/getCompanyData';
import CheckedParagraph from './typography/CheckedParagraph';
import UncheckedParagraph from './typography/UncheckedParagraph';

// checkedItems and uncheckedItems are doing the exact opposite
// checkedItems filters the complete list of checklist items and returns the ones that have been checked
const checkedItems = (completeChecklist, checkedIds) =>
  completeChecklist.filter(checklistItem => checkedIds.includes(checklistItem.id));

// uncheckedItems filters the complete list of checklist items and returns the ones that haven't been checked
const uncheckedItems = (completeChecklist, uncheckedIds) =>
  completeChecklist.filter(checklistItem => !uncheckedIds.includes(checklistItem.id));
class Company extends React.Component {
  componentDidMount() {
    const { match, getCompanyData } = this.props; // eslint-disable-line
    getCompanyData(match.params.id);
  }

  render() {
    const { companyData, checklist } = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6}>
          <h1>Bridge Company Certification</h1>
          <h2>{companyData.name}</h2>
          <h2>Company Status:</h2>
          <Grid container justify="space-between">
            {companyData.score > 5 ? (
              <CheckedParagraph text="Certified!" />
            ) : (
              <UncheckedParagraph text="Uncertified" />
            )}
            <p>Score: {companyData.score}/10</p>
          </Grid>
          <Divider variant="middle" />
          {checkedItems(checklist, companyData.checked_checklist_ids).map(item => (
            <CheckedParagraph text={item.name} />
          ))}
          {uncheckedItems(checklist, companyData.checked_checklist_ids).map(item => (
            <UncheckedParagraph text={item.name} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCompanyData: companyId => dispatch(getCompanyData(companyId))
});

const mapStateToProps = ({
  company: { getCompanySuccess, companyData, companyId },
  frontendData: { checklist }
}) => {
  return {
    getCompanySuccess,
    companyData,
    companyId,
    checklist
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
