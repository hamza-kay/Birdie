import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import { AppBar, Toolbar } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0)',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.root} sx={{ bgcolor: '#333996' }}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
