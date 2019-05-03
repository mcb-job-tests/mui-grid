import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import './App.css';
import MuiGrid from '@material-ui/core/Grid';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import SellingABusinessIcon from './Icons/48px/Selling business/black.png'

const panelStyle ={
  position: 'static',
  borderRadius: "5px",
  WebkitBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  MozBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  margin:"4px",
  width:"100%",
}

const ExpandMoreIcon = withStyles({
  root: {
    color: '#232a3a'
  },
})(MuiExpandMoreIcon);

const Grid = withStyles({
  item: {
/*    margin:0*/
  },
})(MuiGrid);

const ExpansionPanel = withStyles({
  root: panelStyle,
})(MuiExpansionPanel);

const PanelHeader = ({icon, title}) => {
  return(
    <div className={'panel-header-icon'}>
      { typeof icon !== "undefined" ? <img  className={'tile-icon'} src={icon} alt="Topic Icon" /> : null}
      <div style={{padding:"20px"}}> <Typography variant={'h5'}> {title} </Typography> </div>
    </div>
  )
}

const ExpandablePanel = (props) => {
  const {type, icon, title, content} = props;
  return (
    <div>

      <div className={'hidden-on-mobile item-wrapper '} >
        <PanelHeader icon={icon} title={title}/>
        <div className={type} style={{overflow:'hidden'}}>
          <p style={{padding: '0px 12px 0px 72px'}}> {content} </p>
        </div>
        <div style={{height:10, border: '2px solid purple'}}/>
      </div>

      <ExpansionPanel className={'hidden-on-desktop'} square={true} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color={'inherit'}/>}>
          <div> { typeof icon !== "undefined" ? <img src={icon} style={{verticalAlign: 'middle'}} alt="Topic Icon" /> : null} </div>
          <div className={'tile-title'}> {title} </div>
        </ExpansionPanelSummary>
          <ExpansionPanelDetails> <Typography> {content} </Typography> </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
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


        <div style={{margin:"8px", marginRight:"16px"}}>
          <Grid container spacing={16}>

            {/*First Column*/}
            <Grid item xs={12} md={6}>
              <Grid container direction="column" spacing={16}>

                  <Grid item xs={12} className='box '>
                    <ExpandablePanel type={'setting-up'} title={'Setting Up'} icon={SettingUpIcon} content={content + content}/>
                  </Grid>

                  <Grid item xs={12} className='box'>
                    <ExpandablePanel type={'staff'} title={'Staff'} icon={staffIcon} content={content}/>
                  </Grid>

                  <Grid item xs={12} className='box image-2 hidden-on-mobile' >
                    <div><p>IMAGE 2</p></div>
                  </Grid>
              </Grid>
            </Grid>

            {/*Second Column*/}
            <Grid item xs={12} md={6} >
              <Grid container direction="column" spacing={16}>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel type={'operations'} title={'Operations'} icon={OperationsIcon} content={content + content}/>
                  </Grid>

                  <Grid item xs={12} >
                    <Grid container spacing={16} >
                      <Grid item xs={12} md={12} lg={6} className={'box hidden-on-mobile'} style={{height:284}}>
                        <div style={{...panelStyle, height:284}}>
                          IMAGE 1
                        </div>
                      </Grid>

                      <Grid item xs={12} md={12} lg={6} className='box' >
                        <ExpandablePanel type={'selling-a-business'} title={'Selling A Business'} icon={SellingABusinessIcon} content={content + content}/>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel title={'Dealing with disputes'} icon={DealingWithDisputesIcon} content={content}/>
                  </Grid>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel title={'Trading'} icon={TradingIcon} content={content}/>
                  </Grid>

              </Grid>
            </Grid>

            {/*Bottom Row*/}
              <Grid item >
                <Grid container direction='row' spacing={16}>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
                    <ExpandablePanel title={'Company admin'} icon={CompanyAdminIcon} content={content}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
                    <ExpandablePanel title={'Directors'} icon={DirectorsIcon} content={content}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
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
