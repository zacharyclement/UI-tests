import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';

import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo_Black.png'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        
        // width: 50,
    },
    pakkeLogo: {
        height: 50,
        marginTop: 5,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};


class Header extends React.Component {

    state = {
        left: false,
    };


    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        // const { classes } = props;

        const sideList = (
            <div className={classes.list}>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary="About Pakke" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="How It Works" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemText primary="Events" />
                    </ListItem>


                    <ListItem button>
                        <ListItemText primary="Login" />
                    </ListItem>
                </List>
            </div>
        );


        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon onClick={this.toggleDrawer('left', true)} />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                
                                <img src={Logo} alt='none' className={classes.pakkeLogo}/>
                                {/* <CardMedia image={Logo} className={classes.pakkeLogo}/> */}
                            </Typography>

                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>


        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);