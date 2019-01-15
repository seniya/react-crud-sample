import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ReactTutorialMain extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      'items' : [
        {'link' : '/reactTutorial/1', 'name' : '1편 리액트는 무엇인가'},
        {'link' : '/reactTutorial/2', 'name' : '2편 리액트 프로젝트 시작하기'},
        {'link' : '/reactTutorial/3', 'name' : '3편 JSX'},
        {'link' : '/reactTutorial/4', 'name' : '4편 props 와 state'},
        {'link' : '/reactTutorial/5', 'name' : '5편 LifeCycle API'},
      ]
    };
  }

  render() {
    const { classes } = this.props;
    const { items } = this.state;
    
    return (
      <>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            {
              items.map( (item, idx) => (
                <ListItem 
                  button 
                  key={idx}
                  component={Link}
                  to={ `${item.link}` }>
                  <ListItemText primary={`${item.name}`} />
                </ListItem>
              ))
            }
          </List>
        </div>
      </>
    )
  }

}

ReactTutorialMain.propTypes = propTypes;
export default withStyles(styles)(ReactTutorialMain);