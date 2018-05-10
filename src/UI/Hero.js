import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';



const styles = theme => ({
    root: {
        overflow: 'hidden',
        // padding: theme.spacing.unit * 3
    },

    imageContainer: {
        height: '100%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        maxHeight: 550,
        minHeight: 525,
        objectFit: 'cover',
        zIndex: -1,
    },
    slogan: {
    }
});


function Hero(props) {

    const { classes } = props;

    return (
        // <Grid className={classes.root}>
        //     <img className={classes.image} src="https://images.unsplash.com/photo-1468136020796-0eec5226a897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a2c21dce70f79e8b5fe0e77e142635b&auto=format&fit=crop&w=1350&q=80" alt='none' />
        // </Grid>


        <div className={classes.root}>
            <Grid container justify={'center'}>
                <Grid item className={classes.imageContainer}>
                    <img className={classes.image}src="https://images.unsplash.com/photo-1468136020796-0eec5226a897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a2c21dce70f79e8b5fe0e77e142635b&auto=format&fit=crop&w=1350&q=80" alt='none' />
                </Grid>

                <Grid item className={classes.slogan}>
                    <Typography>Be Part of Your Community </Typography>
                </Grid>
            </Grid>
        </div>
    )
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);