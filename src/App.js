import React, {Fragment} from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import './App.css';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import staffIcon from './Icons/48px/Staff/black.png'
import OperationsIcon from './Icons/48px/Operations/black.png'
import SettingUpIcon from './Icons/48px/Setting up/spanners.png'
import DealingWithDisputesIcon from './Icons/48px/Disputes/black.png'
import TradingIcon from './Icons/48px/Trading/black.png'
import DirectorsIcon from './Icons/48px/Directors/black.png'
import FinanceIcon from './Icons/48px/Finance/black.png'
import CompanyAdminIcon from './Icons/48px/Admin/black.png'

const panelStyle ={
  borderRadius: "10px",
  WebkitBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  MozBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  margin: "4px",
  width:"100%",
}


const ExpansionPanelStyle = withStyles({
  root: panelStyle,
})(ExpansionPanel);

const PanelHeader = ({icon, title}) => {
  return(
    <div className={'panel-header-icon'}>
      { typeof icon !== "undefined" ? <img  style={{padding:10}} src={icon} alt="Topic Icon" /> : null}
      <div style={{padding:"20px"}}>
        <Typography variant={'title'}>
          {title}
        </Typography>
      </div>
    </div>
  )
}

const ExpandablePanel = (props) => {
  const {icon, title, content} = props;
  return (
    <Fragment>
      <div className={'hidden-on-mobile item-wrapper'} >
        <PanelHeader icon={icon} title={title}/>
        <p style={{padding: '0 10px 10px 10px'}}>
          {content}
        </p>

      </div>
      <ExpansionPanelStyle
        className={'hidden-on-desktop'}
        square={true}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            { typeof icon !== "undefined" ? <img style={{paddingLeft:10, paddingRight:10}} src={icon} alt="Topic Icon" /> : null}
          </div>
          <div >
            <Typography variant={"h5"}>{title}</Typography>
          </div>
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
  const theme = createMuiTheme({
    breakpoints: { values: breakpointValues },
  });

  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget.'
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>


        <div style={{margin:"16px"}}>
          <Grid container spacing={8}>

            {/*First Column*/}
            <Grid item xs={12} md={6}>
              <Grid container spacing={8}>

                  <Grid item xs={12} className='box'>
                    <ExpandablePanel title={'Setting Up'} icon={SettingUpIcon} content={content + content}/>
                  </Grid>

                  <Grid item xs={12} className='box'>
                    <ExpandablePanel title={'Staff'} icon={staffIcon} content={content}/>
                  </Grid>

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

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel title={'Operations'} icon={OperationsIcon} content={content + content}/>
                  </Grid>

                <div className={'item-wrapper hidden-on-mobile image-1'}>
                  <Grid container spacing={8}>
                    <Grid item xs={12} md={6} className='box'>
                        <div ><p>IMAGE 1</p></div>
                    </Grid>

                    <Grid item xs={12} md={6} className='box'>
                      <div ><p>Selling a Business</p></div>
                    </Grid>
                  </Grid>
                </div>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel title={'Dealing with disputes'} icon={DealingWithDisputesIcon} content={content}/>
                  </Grid>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel title={'Trading'} icon={TradingIcon} content={content}/>
                  </Grid>

              </Grid>
            </Grid>
          </Grid>

          {/*Bottom Row*/}
          <Grid container direction='column' spacing={8}>
            <Grid item >
              <Grid container direction='row' spacing={8}>
                <Grid item xs={12} md={4} className='box'>
                  <ExpandablePanel title={'Company admin'} icon={CompanyAdminIcon} content={content}/>
                </Grid>
                <Grid item xs={12} md={4} className='box'>
                  <ExpandablePanel title={'Directors'} icon={DirectorsIcon} content={content}/>
                </Grid>
                <Grid item xs={12} md={4} className='box'>
                  <ExpandablePanel title={'Finance'} icon={FinanceIcon} content={content}/>
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
