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
        <div style={{margin:8}}>
          <Grid container spacing={8}>

            {/*First Column*/}
            <Grid item xs={12} md={6}>
              <Grid container spacing={8}>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box setting-up'>
                    <div><p>Setting up</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box staff'>
                    <div><p>Staff</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box image-2'>
                    <div><p>IMAGE 2</p></div>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            {/*Second Column*/}
            <Grid item xs={12} md={6}>
              <Grid container spacing={8}>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box operations' >
                    <div ><p>Operations</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper'}>
                  <Grid container>
                    <Grid item xs={12} md={6} className='box image-1'>
                        <div ><p>IMAGE 1</p></div>
                    </Grid>

                    <Grid item xs={12} md={6} className='box selling-a-business'>
                      <div ><p>Selling a Business</p></div>
                    </Grid>
                  </Grid>
                </div>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box dealing-with-disputes' >
                    <div ><p>Dealing with disputes</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper'}>
                  <Grid item xs={12} className='box trading' >
                    <div><p>Trading</p></div>
                  </Grid>
                </div>

              </Grid>
            </Grid>

            {/*Bottom Row*/}
            <Grid item xs={12} className='bottom-row' >
              <Grid container>
                <Grid item xs={12} md={4} className='box company-admin'>
                  <div><p>Company admin</p></div>
                </Grid>
                <Grid item xs={12} md={4} className='box directors'>
                  <div><p>Directors</p></div>
                </Grid>
                <Grid item xs={12} md={4} className='box finance'>
                  <div><p>Finance</p></div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
