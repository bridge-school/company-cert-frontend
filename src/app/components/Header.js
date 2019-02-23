import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  grow: {
    flexGrow: 1,
  },
  headerLogo: {
    width: '50px',
  }
};

const ButtonAppBar = ({ title, classes: { grow, headerLogo } }) => {
  const [anchor, setAnchor] = useState(null);
  return (
    <div className={grow}>
    <AppBar position="fixed" color="fff" >
      <Toolbar>
        <img className={headerLogo} src={logo} alt="Bridge" />
        <Typography variant="h6" color="inherit" className={grow}>
          { title }
        </Typography>
        <IconButton 
          aria-label="Menu"
          aria-owns={anchor? 'nav-menu' : undefined}
          aria-haspopup="true"
          onClick={(e) => {
            setAnchor(e.currentTarget);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="nav-menu"
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          <MenuItem onClick={() => setAnchor(null)}>Add Company</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>Companies</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>Add Student</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);