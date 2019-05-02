import React, {Fragment} from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import staffIcon from "./Icons/48px/Staff/black.png"


import './App.css';

const ExpansionPanelStyle = withStyles({
  root: {
    border: '3px solid purple',
    borderRadius: 10
  },
})(ExpansionPanel);

const ExpandablePanel = (props) => {
  const {icon, title, content} = props;
  console.log("icon", icon)
  return (
    <Fragment>
      <div className={'hidden-on-mobile'}>
        <h3>
          {title}
        </h3>
        <p>
          {content}
        </p>
      </div>
      <ExpansionPanelStyle
        className={'hidden-on-desktop'}
        square={true}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          { typeof icon !== "undefined" ? <img src={icon} alt="Staff Icon" /> : null}
          <Typography variant={"h5"}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {content}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanelStyle>
    </Fragment>
  )
}

function App() {

  const breakpointValues = {
    xs: 0,
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1200,
  };
  const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget.'
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div style={{margin:8}}>
          <Grid container spacing={8}>

            {/*First Column*/}
            <Grid item xs={12} md={6}>
              <Grid container spacing={8}>

                <div className={'item-wrapper setting-up expandable'}>
                  <Grid item xs={12} className='box'>
                    <ExpandablePanel title={'Setting Up'} content={content + content}/>
                  </Grid>
                </div>

                <div className={'item-wrapper staff expandable'}>
                  <Grid item xs={12} className='box'>
                    <ExpandablePanel icon={staffIcon} title={'Staff'} content={content}/>
                  </Grid>
                </div>

                <div className={'item-wrapper hidden-on-mobile image-2'}>
                  <Grid item xs={12} className='box'>
                    <div><p>IMAGE 2</p></div>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            {/*Second Column*/}
            <Grid item xs={12} md={6}>
              <Grid container spacing={8}>

                <div className={'item-wrapper operations'}>
                  <Grid item xs={12} className='box' >
                    <div ><p>Operations</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper hidden-on-mobile image-1'}>
                  <Grid container>
                    <Grid item xs={12} md={6} className='box'>
                        <div ><p>IMAGE 1</p></div>
                    </Grid>

                    <Grid item xs={12} md={6} className='box selling-a-business'>
                      <div ><p>Selling a Business</p></div>
                    </Grid>
                  </Grid>
                </div>

                <div className={'item-wrapper dealing-with-disputes'}>
                  <Grid item xs={12} className='box' >
                    <div ><p>Dealing with disputes</p></div>
                  </Grid>
                </div>

                <div className={'item-wrapper trading'}>
                  <Grid item xs={12} className='box' >
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
