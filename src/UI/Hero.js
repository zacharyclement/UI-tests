import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax';
import image2 from './triangleWhite.svg';



const styles = theme => ({

    image: {
        height: '100%',
        width: '100%',
        maxHeight: 300,
        minHeight: 700,
        minWidth: '100%',
        objectFit: 'cover',
        zIndex: -1,
    },
    cardContent: {
        justifyContent: 'center',
    },
    triangle: {
        marginTop: '5%',
        maxHeight: '10rem',
    },
    subheading: {
        // marginTop: '2%',
    },
    bootstrapRoot: {
        marginTop: '15%',
    },
    bootstrapInput: {
        marginRight: '2%',
        borderRadius: 1,
        backgroundColor: theme.palette.common.white,
        fontSize: 16,
        color: 'lightGray',
        padding: '10px 12px',
    },
    bootstrapFormLabel: {
        // fontSize: 18,
    },

});


function Hero(props) {

    const { classes } = props;

    return (
        <div>
            <Card>
                <CardMedia className={classes.image} image="http://webapp.blackscreen1.com/img/blackscreen1logo.jpg" >
                    <CardContent className={classes.cardContent}>
                        <Parallax offsetYMax={50} offsetYMin={-50} slowerScrollRate tag="figure">
                            <Grid container justify={'center'}>
                                <img src={image2} className={classes.triangle} />
                            </Grid>
                            <Typography align={'center'} variant={'display2'} color={'primary'} gutterBottom>It's Happening, Go Find It.</Typography>
                            <Typography align={'center'} variant={'subheading'} color={'primary'} className={classes.subheading}>Discover | Connect | Experience</Typography>
                            <Typography align={'center'}>
                                <TextField
                                    defaultValue="enter your email"
                                    id="input"
                                    InputProps={{
                                        disableUnderline: true,
                                        classes: {
                                            root: classes.bootstrapRoot,
                                            input: classes.bootstrapInput,
                                        },
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                        className: classes.bootstrapFormLabel,
                                    }}
                                />
                                <Button variant='raised' color="secondary" size={'large'}>Join Us</Button>
                            </Typography>
                        </Parallax>
                    </CardContent>
                </CardMedia>
            </Card>
        </div >



    )
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);