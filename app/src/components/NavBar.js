import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import img from '../assets/images/mlb-logo.jpg';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <div>
          <Link to='/'>Record</Link>
        </div>
        <div>
          <Link to='/shuffle'>Team Shuffle</Link>
        </div>
        <div>
          <Link to='/history'>History</Link>
        </div>
          <IconButton>
            <img src={img} alt='MLB' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;