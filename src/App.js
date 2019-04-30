import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

import './App.css';

function App() {

  const breakpointValues = {
    xs: 0,
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1200,
  };
  const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <div className='box setting-up'><p>Setting up</p></div>
          </Grid>
          <Grid container item xm={12} sm={12} md={6}>
            <Grid item xs={12}>
              <div className='box operations'><p>Operations</p></div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className='box'><p>IMAGE</p></div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className='box'><p>Selling a business</p></div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid className='container' item xs={6} sm={6} md={3}>
              <div className='box sm-box'><p>xs=6 sm=6 md={3}</p></div>
            </Grid>
            <Grid className='container' item xs={6} sm={6} md={3}>
              <div className='box sm-box'><p>xs=6 sm=3 md={3}</p></div>
            </Grid>
            <Grid className='container' item xs={6} sm={6} md={3}>
              <div className='box sm-box'><p>xs=6 sm=3 md={3}</p></div>
            </Grid>
            <Grid className='container' item xs={6} sm={6} md={3}>
              <div className='box sm-box'><p>xs=6 sm=3 md={3}</p></div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='box'><p>xs=12 sm=6</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className='box'><p>xs=12 sm=6 md=3</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className='box'><p>xs=12 sm=6 md=3</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className='box'><p>xs=12 sm=6 md=3</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className='box'><p>xs=12 sm=6 md=3</p></div>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
