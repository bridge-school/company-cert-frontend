import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { showAllCompanies, showCertifiedCompanies } from '../store/actions/showOnlyCertified';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 65,
    width: '100%',
    dropShadow: 'none',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceRight: {
    marginRight: 10
  },
  heading: {
    fontSize: '1rem'
  },
  center: {
    textAlign: 'center'
  }
};

const SecondaryNav = ({
  classes: { wrapper, spaceRight, heading, center },
  showAllCompanies,
  showCertifiedCompanies,
  showOnlyCertified
}) => (
  <Paper className={wrapper}>
    <div className={center}>
      <h1 className={heading}>Bridge Company Certification</h1>
      <Button
        onClick={showAllCompanies}
        size="small"
        variant={showOnlyCertified ? 'outlined' : 'contained'}
        color="secondary"
        className={spaceRight}
      >
        All Companies
      </Button>
      <Button
        onClick={showCertifiedCompanies}
        size="small"
        variant={showOnlyCertified ? 'contained' : 'outlined'}
        color="secondary"
      >
        Certified Companies
      </Button>
    </div>
  </Paper>
);

const mapDispatchToProps = {
  showCertifiedCompanies,
  showAllCompanies
};

const mapStateToProps = ({ companies: { showOnlyCertified } }) => ({ showOnlyCertified });

const StyledHeader = withStyles(styles)(SecondaryNav);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHeader);
