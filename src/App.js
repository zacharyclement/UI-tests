import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactDOM from 'react-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonAppBar from './UI/ButtonAppBar';
import muiTheme from './UI/muiTheme';
import MenuListComposition from './UI/MenuListComposition';
import DetailedExpansionPanel from './UI/DetailedExpansionPanel';
import TemporaryDrawer from './UI/TemporaryDrawer';
import Header from './UI/Header';
import SimpleMediaCard from './UI/SimpleCardMedia';
import Paper from 'material-ui/Paper';


const styles = {
  root: {
    flexGrow: 1,
    // background: 'black',
  },
  paper: {
    // padding: theme.spacing.unit * 2,
    height: 100,
    width: 100,
    textAlign: 'center',
  },
  demo: {
    height: 200,
    background: 'blue',
  },
  spacer: {
    height: 100,
  }
};

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>

        <Header />
        <div >
          <Grid item xs={12}>
            <Grid container className={classes.spacer} justify={'center'} />
          </Grid>

          <Grid item md>
            <Grid container spacing={8} className={classes.root} justify={'center'} >
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className={classes.spacer} justify={'center'} />
          </Grid>
          // // // 

          <Grid container spacing={8} className={classes.demo} justify={'center'} alignItems={'center'}>

            <Grid item>
              <Paper className={classes.paper}>1</Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.paper}>2</Paper>
            </Grid>

          </Grid>


          {/* <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>*/}
        </div>

        {/* <SimpleMediaCard className={classes.card}>xs</SimpleMediaCard>
      <SimpleMediaCard className={classes.card}>xs</SimpleMediaCard>
      <SimpleMediaCard className={classes.card}>xs</SimpleMediaCard> */}

      </MuiThemeProvider >
    );

  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
