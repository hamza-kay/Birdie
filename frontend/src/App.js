import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getObervations } from './actions/observations';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Observations from './components/Observations';
import Header from './components/Header';
import { ClassNames } from '@emotion/react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObervations());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#333996',
        light: '#3c44b126',
      },
      secondary: {
        main: '#f83245',
        light: '#f8324526',
      },
      background: {
        default: '#f4f5fd',
      },
    },
  });

  const useStyles = makeStyles({});

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Observations />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
