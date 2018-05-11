import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import image from './triangleBlack.eps';





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
        marginTop: '15%',
    },
    bootstrapRoot: {
        marginTop: '20%',
        // padding: 0,
        // 'label + &': {
        //   marginTop: theme.spacing.unit * 3,
        // },
    },
    bootstrapInput: {
        marginRight: 20,
        borderRadius: 3,
        backgroundColor: theme.palette.common.white,
        // border: '1px solid #ced4da',
        fontSize: 16,
        color: 'lightGray',
        padding: '10px 12px',
        // width: 'calc(100% - 24px)',
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',

    },
    bootstrapFormLabel: {
        // fontSize: 18,
    },

});


function Hero(props) {

    const { classes } = props;

    return (
        // <Grid className={classes.root}>
        //     <img className={classes.image} src="https://images.unsplash.com/photo-1468136020796-0eec5226a897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a2c21dce70f79e8b5fe0e77e142635b&auto=format&fit=crop&w=1350&q=80" alt='none' />
        // </Grid>

        <div>
            <Card>
                <CardMedia className={classes.image} image="https://images.unsplash.com/photo-1468136020796-0eec5226a897?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a2c21dce70f79e8b5fe0e77e142635b&auto=format&fit=crop&w=1350&q=80)" >
                    <CardContent>
                        <CardMedia image={image} />
                        <Typography className={classes.cardContent} align={'center'} variant={'headline'}>Be a part of your community</Typography>
                        <Typography align={'center'} variant={'title'}>Discover | Experience | Connect</Typography>
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
                    </CardContent>

                </CardMedia>
            </Card>
        </div>
    )
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);