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
        wrapper: {
            marginTop: theme.spacing.unit * 8,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 20}px`,
        },
        box1: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
            color: theme.palette.text.primary,
            minWidth: 340,
            maxWidth: 750,
        },
        paper1: {
            width: 350,
        },
        wrapper2: {
            margin: '5%',
        }
    };

    //style == className in these withTheme components

    return (
        <div>
            <Grid container justify={'center'} alignItems={'center'} style={styles.wrapper}>

                <Grid item md style={{ width: '100%', }}>
                    <Grid container justify={'center'} style={{background: 'theme.palette.text.primary.main'}}>
                        <Typography align={'center'} variant={'headline'} style={styles.box1}>Pakke events encourage you to discover unique environments, connect with new people, and experience more in your city.</Typography>
                    </Grid>
                </Grid>
                {/* </Paper> */}
            </Grid>
        </div >



    );
}

WhatIsPakkeEvent.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme()(WhatIsPakkeEvent); // Let's get the theme as a property
