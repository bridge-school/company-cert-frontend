import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 50,
    width: '100%',
    dropShadow: 'none',
    padding: '20px 0',
    textAlign: 'center',
    boxShadow: 'none'
  },
  spaceRight: {
    marginRight: 10
  },
  heading: {
    fontSize: 20
  }
};

const SecondaryNav = ({ classes: { wrapper, spaceRight, heading } }) => (
  <Paper className={wrapper}>
    <h1 className={heading}>Bridge Company Certification</h1>
    <Button size="small" variant="contained" color="primary" className={spaceRight}>
      Certified Companies
    </Button>
    <Button size="small" variant="contained" color="primary">
      All Companies
    </Button>
  </Paper>
);

const StyledHeader = withStyles(styles)(SecondaryNav);

export default StyledHeader;
