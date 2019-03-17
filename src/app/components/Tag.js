import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tagStyle: {
    height: 25,
    margin: '0 5px 5px 0',
    backgroundColor: '#4E57CA',
    color: '#FFF'
  }
};

const Tag = ({ label, classes }) => <Chip label={label} className={classes.tagStyle} />;

export default withStyles(styles)(Tag);
