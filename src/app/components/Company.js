import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import getCompanyData from '../store/actions/getCompanyData';
import CheckedParagraph from './typography/CheckedParagraph';
import UncheckedParagraph from './typography/UncheckedParagraph';

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

const centerText = { textAlign: 'center' };
const tagStyle = { height: '25px', marginRight: '5px', backgroundColor: '#65B8DE' };
class Company extends React.Component {
  componentDidMount() {
    const { match, getCompanyData } = this.props; // eslint-disable-line
    getCompanyData(match.params.id);
  }

  render() {
    const { companyData, checklist } = this.props;
    return (
      <Wrapper>
        <Grid item xs={10} sm={8} md={6}>
          <h1 style={{ ...centerText, fontSize: '1rem' }}>Bridge Company Certification</h1>
          <h2 style={centerText}>{companyData.name}</h2>
          <h3 style={{ ...centerText, fontSize: '1rem' }}>Company Status:</h3>
          <Grid container justify="space-between">
            {companyData.score > 5 ? (
              <CheckedParagraph text="Certified!" />
            ) : (
              <UncheckedParagraph text="Not Certified" />
            )}
            <p>Score: {companyData.score}/10</p>
          </Grid>
          <Divider variant="middle" style={{ margin: '1rem 2rem 2rem' }} />
          <div>
            {checkedItems(checklist, companyData.checked_checklist_ids).map(item => (
              <CheckedParagraph key={item.id} text={item.name} />
            ))}
          </div>
          <div style={{ marginTop: '4rem' }}>
            {uncheckedItems(checklist, companyData.checked_checklist_ids).map(item => (
              <UncheckedParagraph key={item.id} text={item.name} />
            ))}
          </div>
          <div>
            {companyData &&
              companyData.industry &&
              companyData.industry.map(tag => (
                <Chip label={tag.label} key={tag.value} style={tagStyle} />
              ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            {companyData &&
              companyData.tech &&
              companyData.tech.map(tag => (
                <Chip label={tag.label} key={tag.value} style={tagStyle} />
              ))}
          </div>
        </Grid>
      </Wrapper>
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
