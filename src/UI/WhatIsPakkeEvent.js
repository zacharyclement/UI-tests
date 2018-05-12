import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


function WhatIsPakkeEvent(props) {

    const { theme } = props;
    //   const primaryText = theme.palette.text.primary;
    //   const primaryColor = theme.palette.primary.main;

    const styles = {
        box1: {
            // backgroundColor: theme.palette.background.default,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            color: theme.palette.text.primary,
        },
        box2: {
            // backgroundColor: theme.palette.secondary.main,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            //   color: theme.palette.common.white,
        },
        wrapper: {
            marginTop: theme.spacing.unit * 8,
            background: theme.palette.primary.main,
            height: 400,
        },
    };

    //style == className in these withTheme components

    return (
        
        <Grid container justify={'center'} alignItems={'center'} style={styles.wrapper}>
            <Grid item>
                <Paper style={{ width: 375, }}>
                    <Typography align={'center'} variant={'headline'} style={styles.box1}>What is a Pakke event?</Typography>
                    <Typography align={'center'} variant={'subheading'}style={styles.box2}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
                </Paper>
            </Grid>
        </Grid>



    );
}

WhatIsPakkeEvent.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(WhatIsPakkeEvent); // Let's get the theme as a property
