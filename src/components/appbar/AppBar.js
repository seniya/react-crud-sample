import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuMain from '../menu/MenuMain';
import LoadingCircle from '../lodingbar/LoadingCircle';


const propTypes = {
  classes: PropTypes.object
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

class AppBarMain extends Component {

  static defaultProps = {};

  handleClick = () => {
    window.history.back();
  }

  render() {
    const { classes } = this.props;

    return (    
      <>  
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MenuMain />
            <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to={ `/es6lesson` }>
              Home
            </Typography>
            <Button variant="contained" color="secondary" onClick={ this.handleClick }>뒤로가기</Button>
            <LoadingCircle />
          </Toolbar>
        </AppBar>
      </div>
      </>
    )
  }

}

AppBarMain.propTypes = propTypes;
export default withStyles(styles)(AppBarMain);