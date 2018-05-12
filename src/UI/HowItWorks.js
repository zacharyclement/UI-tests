import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import People from '@material-ui/icons/People';
import Launch from '@material-ui/icons/Launch';
import Theaters from '@material-ui/icons/Theaters';




function HowItWorks(props) {

    const { theme } = props;
    //   const primaryText = theme.palette.text.primary;
    //   const primaryColor = theme.palette.primary.main;

    const styles = {
        wrapper: {
            marginTop: theme.spacing.unit * 5,
            // background: theme.palette.primary.main,
            height: '100%',
        },
        box1: {
            // backgroundColor: theme.palette.background.default,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            // color: theme.palette.text.primary,
        },
        box2: {
            // backgroundColor: theme.palette.secondary.main,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            //   color: theme.palette.common.white,
        },
        icon: {
            maxHeight: 100,
        },
    };

    //style == className in these withTheme components

    return (
        <div>
            <Grid container style={styles.wrapper}>
                <Grid container justify={'center'} >
                    <Grid item>
                        <Typography variant='headline' align={'center'} style={styles.box1}>How It Works</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={16} justify={'center'} alignItems={'center'}>
                    <Grid item>
                        <Paper style={{ width: 375 }}>
                            <Grid container justify={'center'}>
                                <Launch style={styles.icon} />
                            </Grid>
                            <Typography align={'center'} style={styles.box1} variant="title">1. Apply</Typography>
                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item justify={'center'}>
                        <Paper style={{ width: 375 }}>
                            <Grid container justify={'center'}>
                                <People style={styles.icon} />
                            </Grid>

                            <Typography align={'center'} style={styles.box1} variant="title">2. Get Selected</Typography>
                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={{ width: 375 }}>
                            <Grid container justify={'center'}>
                                <Theaters style={styles.icon} />
                            </Grid>

                            <Typography align={'center'} style={styles.box1} variant="title">3. Buy Ticket</Typography>
                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div >




    );
}

HowItWorks.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(HowItWorks); // Let's get the theme as a property