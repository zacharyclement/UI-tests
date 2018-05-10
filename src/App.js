import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './UI/muiTheme';
import Header from './UI/Header';
import SimpleMediaCard from './UI/SimpleCardMedia';
import Paper from 'material-ui/Paper';
import WhatIsPakkeEvent from './UI/WhatIsPakkeEvent';
import Hero from './UI/Hero';
// import ReactDOM from 'react-dom';
// import MenuListComposition from './UI/MenuListComposition';
// import DetailedExpansionPanel from './UI/DetailedExpansionPanel';
// import TemporaryDrawer from './UI/TemporaryDrawer';
// import Button from 'material-ui/Button';
// import ButtonAppBar from './UI/ButtonAppBar';



const styles = theme => ({
  root: {
    // flexGrow: 1,
    // background: 'black',
  },
  margin: {
    marginTop: '10rem',

    // background: theme.palette.secondary.dark,
    //this doesn't work, calls global theme
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: 100,
    width: 100,
    textAlign: 'center',
  },
  demo: {
    marginTop: '10rem',
    height: 200,
    background: 'blue',
  },

});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className={classes.root}>
          <Header />
          <Hero />

          <Grid container className={classes.margin} justify={'center'}>
            <Grid item>
              <WhatIsPakkeEvent />
            </Grid>
          </Grid>

          <Grid container spacing={16} justify={'center'} className={classes.margin} >
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

          <Grid container className={classes.demo} justify={'center'} alignItems={'center'}>
            
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
