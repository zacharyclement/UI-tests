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
    background: 'black',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: 600,
    // maxWidth: 1050,
    backgroundSize: 'cover',
    margin: 'auto',
  }
};

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>

        <Header />
        <Grid container justify={'center'} alignItems='flex-start'>
          <img className={classes.image} src="https://images.unsplash.com/photo-1468136020796-0eec5226a897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a2c21dce70f79e8b5fe0e77e142635b&auto=format&fit=crop&w=1350&q=80" />
        </Grid>

        <div >
          <Grid item xs={12}>
            <Grid container className={classes.spacer} />
          </Grid>

          <Grid item sm={12}>
            <Grid container spacing={16} justify={'center'} >
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
