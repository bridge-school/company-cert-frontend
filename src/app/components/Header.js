import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const styles = {
  grow: {
    flexGrow: 1
  },
  headerLogo: {
    width: '50px'
  }
};

const ButtonAppBar = ({ classes: { grow, headerLogo } }) => {
  const [anchor, setAnchor] = useState(null);
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <Link to="/">
          <img className={headerLogo} src={logo} alt="Bridge" />
        </Link>
        <Typography variant="h6" color="inherit" className={grow} />
        <IconButton
          aria-label="Menu"
          aria-owns={anchor ? 'nav-menu' : undefined}
          aria-haspopup="true"
          onClick={e => {
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
          <Link to="/">
            <MenuItem onClick={() => setAnchor(null)}>Add Company</MenuItem>
          </Link>
          <Link to="/companies">
            <MenuItem onClick={() => setAnchor(null)}>Browse Companies</MenuItem>
          </Link>
          <Link to="/student">
            <MenuItem onClick={() => setAnchor(null)}>Add Student</MenuItem>
          </Link>
          <Link to="/students">
            <MenuItem onClick={() => setAnchor(null)}>Students list</MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
