import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const propTypes = {
  classes: PropTypes.object
};

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuMain extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (    
      <>  
        <IconButton 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose} component={Link} to={ `/es6lesson` }>ECMAScript 6 튜토리얼</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to={ `/reactTutorial` }>React.js 튜토리얼</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to={ `/crudTutorial` }>CRUD 튜토리얼</MenuItem>
        </Menu>
      </>
    )
  }

}

MenuMain.propTypes = propTypes;
export default withStyles(styles)(MenuMain);