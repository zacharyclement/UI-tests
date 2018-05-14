import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Logo from './Logo_Black.png'


const styles = {
  card: {
    maxWidth: 350,
    // display: 'flex',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  logo: {
    maxWidth: 75,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>

        <CardMedia className={classes.image} image="http://webapp.blackscreen1.com/img/blackscreen1logo.jpg" >
          <CardContent className={classes.cardContent}>
              
              <Typography align={'center'} variant={'display2'} color={'secondary'}> May</Typography>
              <Typography align={'center'} variant={'display2'} color={'secondary'}>9th</Typography>
              
                
          </CardContent>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pakke Launch Event
          </Typography>
          
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Apply
          </Button>
          <img src={Logo} className={classes.logo}/>

        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);