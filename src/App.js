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

        <Grid container xs={12} justify={'flex-start'} alignItems={'flex-start'}>
          {/*First Column*/}
            <Grid container xs={12} md={6} direction={"column"}>
              <Grid container xs >
                <Grid item xs={12} className='box setting-up'>
                  <div ><p>Setting up</p></div>
                </Grid>
                <Grid item xs={12} className='box setting-up'>
                  <div ><p>Staff</p></div>
                </Grid>
              </Grid>
            </Grid>

          <Grid container xs={12} md={6} direction={"column"} >
            <Grid container xs={12} >
                <Grid item xs={12} className='box operations' >
                  <div ><p>Operations</p></div>
                </Grid>
                <Grid item xs={12} className='box selling-a-business'>
                  <div ><p>Selling a Business</p></div>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
          {/*Second Column*/}
          {/*<Grid container xs={12} md={6} direction={"column"} className={"border"}>
            <Grid item container direction={"row"} xs={12} className={"border"}>
              <Grid item  xs={12} className='box operations border'>
                <div ><p>Operations</p></div>
              </Grid>
              <Grid item direction={"row"} xs={12} className={"box selling-a-business border"}>
                <div><p>Selling a business</p></div>
              </Grid>
            </Grid>
          </Grid>*/}


      </MuiThemeProvider>
    </div>
  );
}

export default App;
