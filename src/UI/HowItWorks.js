import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import People from '@material-ui/icons/People';
import Launch from '@material-ui/icons/Launch';
import Theaters from '@material-ui/icons/Theaters';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider'



function HowItWorks(props) {

    const { theme } = props;
    //   const primaryText = theme.palette.text.primary;
    //   const primaryColor = theme.palette.primary.main;

    const styles = {
        wrapper: {
            flexGrow: 1,
            marginTop: theme.spacing.unit * 5,
            // background: theme.palette.secondary.main,
            background: 'url(http://www.designbolts.com/wp-content/uploads/2013/02/Sandbag-Grey-Seamless-Pattern-For-Website-Background.jpg)',

            height: '100%',
        },
        paper: {
            // background: theme.palette.primary.light,
            width: '100%',
        },
        box0: {
            width: 375,

        },
        box1: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        },
        box2: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            marginBottom: '5%',
        },
        icon: {
            height: 75,
            width: 200,
        },
        divider: {
            // color: theme.palette.secondary.dark
            // border: 'blue',
            // background: 'blue',
            borderColor: theme.palette.secondary.light,
            width: '15%',
            // borderStyle: 'blue',
        }
    };

    //style == className in these withTheme components

    return (

        <div>
            <Grid container justify={'center'} style={styles.wrapper}>
                <Paper style={styles.paper}>
                    <Grid container justify={'center'} style={{ marginTop: '1%' }} >
                        <Grid item>
                            <Typography bottomGutter variant='headline' align={'center'} style={styles.box1}>How It Works</Typography>
                        </Grid>
                    </Grid>



                    <Grid container justify={'center'} style={{ marginTop: '1%' }}>

                        <Grid item style={styles.box0}>
                            <Grid container justify={'center'}>
                                <Launch style={styles.icon} />
                            </Grid>
                            <Typography align={'center'} style={styles.box1} variant="title">1. Apply for Ticket</Typography>
                            <hr style={styles.divider} />
                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>Its free to apply. Just sign in. Apply up until the day before or tickets sell out</Typography>
                        </Grid>

                        <Grid item style={styles.box0}>
                            <Grid container justify={'center'}>
                                <People style={styles.icon} />
                            </Grid>

                            <Typography align={'center'} style={styles.box1} variant="title">2. Get Selected</Typography>
                            <hr style={styles.divider} />
                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>Selections are made using a lottory system. Once you are selected, you'll receive an email to purchase your ticket</Typography>
                        </Grid>

                        <Grid item style={styles.box0}>
                            <Grid container justify={'center'}>
                                <Theaters style={styles.icon} />
                            </Grid>

                            <Typography align={'center'} style={styles.box1} variant="title">3. Buy Ticket</Typography>
                            <hr style={styles.divider} />

                            <Typography align={'center'} style={styles.box2} variant={'subheading'}>Purchase your ticket for yourself and your friends. Then we'll email you the event location the day before the event</Typography>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
        </div>











        // <div>
        //     <Grid container style={styles.wrapper}>
        //         <Grid container justify={'center'} >
        //             <Grid item>
        //                 <Typography variant='headline' align={'center'} style={styles.box1}>How It Works</Typography>
        //             </Grid>
        //         </Grid>

        //         <Grid container spacing={16} justify={'center'} alignItems={'center'}>
        //             <Grid item>
        //                 <Paper style={{ width: 375 }}>
        //                     <Grid container justify={'center'}>
        //                         <Launch style={styles.icon} />
        //                     </Grid>
        //                     <Typography align={'center'} style={styles.box1} variant="title">1. Apply</Typography>
        //                     <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
        //                 </Paper>
        //             </Grid>
        //             <Grid item justify={'center'}>
        //                 <Paper style={{ width: 375 }}>
        //                     <Grid container justify={'center'}>
        //                         <People style={styles.icon} />
        //                     </Grid>

        //                     <Typography align={'center'} style={styles.box1} variant="title">2. Get Selected</Typography>
        //                     <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
        //                 </Paper>
        //             </Grid>
        //             <Grid item>
        //                 <Paper style={{ width: 375 }}>
        //                     <Grid container justify={'center'}>
        //                         <Theaters style={styles.icon} />
        //                     </Grid>

        //                     <Typography align={'center'} style={styles.box1} variant="title">3. Buy Ticket</Typography>
        //                     <Typography align={'center'} style={styles.box2} variant={'subheading'}>A Pakke event is a highly curated gathering. Each event is specially tailored for people to connect and discover all of the unique and special people they may not otherwise get a chance to have a conversation with. We encourage you to socialize in uniques spaces. These spaces are meant to help people connect and socialize in ways that simply aren’t possible at bars and other traditional spaces.</Typography>
        //                 </Paper>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </div > 



    );
}

HowItWorks.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(HowItWorks); // Let's get the theme as a property