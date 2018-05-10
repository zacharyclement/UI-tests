import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';


function WhatIsPakkeEvent(props) {

    const { theme } = props;
    //   const primaryText = theme.palette.text.primary;
    //   const primaryColor = theme.palette.primary.main;

    const styles = {
        box1: {
            backgroundColor: theme.palette.background.default,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            color: theme.palette.text.primary,
        },
        box2: {
            backgroundColor: theme.palette.primary.dark,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            //   color: theme.palette.common.white,
        },
    };

    return (
        <Paper style={{ width: '50rem' }}>


            <Typography align={'center'}style={styles.box1}>What is a Pakke event?</Typography>
            <Typography align={'center'}style={styles.box2}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>


        </Paper>
    );
}

WhatIsPakkeEvent.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(WhatIsPakkeEvent); // Let's get the theme as a property