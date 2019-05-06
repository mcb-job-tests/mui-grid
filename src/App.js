import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';
import MuiGrid from '@material-ui/core/Grid';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import staffIcon from './grid-icons/48px/Staff/black.png'
import OperationsIcon from './grid-icons/48px/Operations/black.png'
import SettingUpIcon from './grid-icons/48px/Setting up/spanners.png'
import DealingWithDisputesIcon from './grid-icons/48px/Disputes/black.png'
import TradingIcon from './grid-icons/48px/Trading/black.png'
import DirectorsIcon from './grid-icons/48px/Directors/black.png'
import FinanceIcon from './grid-icons/48px/Finance/black.png'
import CompanyAdminIcon from './grid-icons/48px/Admin/black.png'
import SellingABusinessIcon from './grid-icons/48px/Selling business/black.png'

import Icon from '@material-ui/core/Icon';
import MuiDesktopIconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import {ExpandMoreRounded} from "@material-ui/icons";

const panelStyle ={
  position: 'static',
  borderRadius: "5px",
  WebkitBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  MozBoxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.4)",
  width:"100%",
}

const DesktopExpandMoreRounded = withStyles({
  colorPrimary: {
    color: 'white'
  }
})(MuiExpandMoreRounded)

const DesktopIconButton = withStyles({
  root: {
    color: 'white',
    padding:6
  }
})(MuiDesktopIconButton);

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
  expanded:{marginTop:0}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  /* Styles applied to the children wrapper element. */
  content: {
    margin: "20px 0",
    "&$expanded": {
      marginBottom: "16px"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const PanelHeader = ({icon, title}) => {
  return(
    <div>
      {
        typeof icon !== "undefined" ?
          <div>
              <img className={'desktop-tile-icon'} src={icon} alt="Topic Icon" />
          </div>
        : null
      }
      <div className={'desktop-tile-title'}> {title} </div>
    </div>
  )
}

const ExpandMoreButton = () => {
  return(
    <div style={{width:'100%', height:0, textAlign: 'center'}}>
      {/*<div style={{display:'block', margin: '0 auto'}}>*/}
        <DesktopIconButton aria-label="Expand More" style={{position: 'relative', top:-22, opacity: 0.6, backgroundColor: '#232a3a'}}>
          <DesktopExpandMoreRounded color={'primary'}/>
        </DesktopIconButton>
      {/*</div>*/}
    </div>
  )
}

const ExpandablePanel = (props) => {
  const {type, icon, title, content} = props;
  return (
    <div>

      <div className={'desktop-only item-wrapper'} >
        <div className={type} style={{position:'relative', overflow:'hidden', borderRadius:'inherit'}}>
          <PanelHeader icon={icon} title={title}/>
          <div style={{margin: '16px 12px 0px 72px'}}>
            {content}
          </div>
          <div style={{
            position:'absolute',
            width:'100%',
            height:22,
            bottom: 0,
            backgroundColor: 'white',
            borderRadius: '0px 0px 5px 5px'
          }}/>
        </div>
        <ExpandMoreButton style={{position:'relative'}}/>
      </div>


      <ExpansionPanel className={'mobile-only'} square={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          style={{paddingLeft: 12, paddingRight: 12}}
        >
          <div>
            { typeof icon !== "undefined" ?
              <img src={icon} alt="Topic Icon" />
            : null }
          </div>
          <div className={'mobile-tile-title'}> {title} </div>
        </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{padding: '0px 6px 6px 75px'}}>
            <div className={'mobile-content'}> {content} </div>
          </ExpansionPanelDetails>
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
  const spacing = { unit: 20 }
  const theme = createMuiTheme({
    breakpoints: { values: breakpointValues },
    overrides: {
      MuiGrid: {
        container: {
          //global spacing override
          margin: -spacing.unit / 2,
            width: "calc(100% + ".concat(spacing.unit, "px)"),
          '& > $item': {
            padding: spacing.unit / 2
          },
          // finer grained spacing override
          /*'&$spacing-xs-16': {
            margin: -spacing.unit / 2,
            width: "calc(100% + ".concat(spacing.unit, "px)"),
            '& > $item': {
              padding: spacing.unit / 2
            }
          }*/
        }
      }
    }
  });

  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n' +
    '            sit amet blandit leo lobortis eget.'
  return (
    <div>
      <MuiThemeProvider theme={theme}>


        <div style={{margin:"16px"}}>
          <Grid container >

            {/*First Column*/}
            <Grid item xs={12} md={6}>
              <Grid container direction="column">

                  <Grid item xs={12} className='box '>
                    <ExpandablePanel type={'setting-up'} title={'Setting up'} icon={SettingUpIcon} content={content + content}/>
                  </Grid>
                  <Grid item xs={12} className='box'>
                    <ExpandablePanel type={'staff'} title={'Staff'} icon={staffIcon} content={content}/>
                  </Grid>

                  <Grid item xs={12} className={'box desktop-only'}>
                    <div className={'image-2'} style={panelStyle}>
                      IMAGE 2
                    </div>
                  </Grid>
              </Grid>
            </Grid>

            {/*Second Column*/}
            <Grid item xs={12} md={6} >
              <Grid container direction="column">

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel type={'operations'} title={'Operations'} icon={OperationsIcon} content={content + content}/>
                  </Grid>

                  <Grid item xs={12} >
                    <Grid container>
                      <Grid item xs={12} md={12} lg={6} className={'box desktop-only'} style={{height:284}}>
                        <div className={'image-1'} style={panelStyle}>
                          IMAGE 1
                        </div>
                      </Grid>

                      <Grid item xs={12} md={12} lg={6} className='box' >
                        <ExpandablePanel type={'selling-a-business'} title={'Selling a business'} icon={SellingABusinessIcon} content={content + content}/>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel type={'dealing-with-disputes'} title={'Dealing with disputes'} icon={DealingWithDisputesIcon} content={content}/>
                  </Grid>

                  <Grid item xs={12} className='box' >
                    <ExpandablePanel type={'trading'} title={'Trading'} icon={TradingIcon} content={content}/>
                  </Grid>

              </Grid>
            </Grid>

            {/*Bottom Row*/}
              <Grid item >
                <Grid container direction='row'>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
                    <ExpandablePanel type={'company-admin'} title={'Company admin'} icon={CompanyAdminIcon} content={content}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
                    <ExpandablePanel type={'directors'} title={'Directors'} icon={DirectorsIcon} content={content}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4} className='box'>
                    <ExpandablePanel type={'finance'} title={'Finance'} icon={FinanceIcon} content={content}/>
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
