import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class LoadingCircle extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      viewable: false,
    };
  }

  render() {
    const { classes } = this.props;
    const { viewable } = this.state;

    return (
      <>      
        {
          viewable === true ? (
            <CircularProgress className={classes.progress} color="secondary" />
          ) : (
            <div></div>
          )
        }
      </>
    )
  }
}


LoadingCircle.propTypes = propTypes;
export default withStyles(styles)(LoadingCircle);