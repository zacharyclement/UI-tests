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
import HowItWorks from './UI/HowItWorks';
import Hero from './UI/Hero';
import { ParallaxProvider } from 'react-scroll-parallax';

import image2 from './UI/triangleWhite.svg';
import Typography from 'material-ui/Typography/Typography';

// import ReactDOM from 'react-dom';
// import MenuListComposition from './UI/MenuListComposition';
// import DetailedExpansionPanel from './UI/DetailedExpansionPanel';
// import TemporaryDrawer from './UI/TemporaryDrawer';
// import Button from 'material-ui/Button';
// import ButtonAppBar from './UI/ButtonAppBar';



const styles = theme => ({
  root: {
    flexGrow: 1,
    // background: 'black',
    background: 'url(http://www.designbolts.com/wp-content/uploads/2013/02/Sandbag-Grey-Seamless-Pattern-For-Website-Background.jpg)',

  },
  cards: {
    marginTop: theme.spacing.unit * 5,
  },

  whatIsPakkeEvent: {
    marginTop: theme.spacing.unit * 5,
    height: 400,
    // background: theme.palette.secondary.light
  },
  triangle: {
    maxHeight: 50,
  }

});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <ParallaxProvider>
        <MuiThemeProvider theme={muiTheme}>
          <div className={classes.root}>
            <Header />
            <Hero />
            <WhatIsPakkeEvent />
            <HowItWorks />



            <Grid container justify={'center'} style={{ marginTop: '10%' }}>
              <Paper align={'center'}style={{width: 350}}>
                <Typography style={{margin: '5%'}} variant='headline'>Pakke Inspired Events</Typography>
              </Paper>
            </Grid>
            <Grid container spacing={16} justify={'center'} className={classes.cards} >
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
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
              <Grid item>
                <SimpleMediaCard className={classes.card} />
              </Grid>
            </Grid>
          </div>
          <footer />



        </MuiThemeProvider >
      </ParallaxProvider>
    );

  }

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
