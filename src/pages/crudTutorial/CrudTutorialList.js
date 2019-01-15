import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import UsersAPI from '../../services/network/UsersAPI';

const propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CrudTutorialList extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      'items' : null,
    };
  }

  componentDidMount() {    
    this.requestApi();
  }

  requestApi = async() => {
    let users = await UsersAPI.findAll()
      .catch( err => { })
      .finally( fin => { });
    this.setState({ 'items': users.data });
  }

  renderEmpty = () => {
    return (
      <p>no items</p>
    )
  }

  renderItems = (items) => {
    return (
      <>
      <List component="nav">
        {
          items.map( (item, idx) => (
            <Fragment key={`fragment_${idx}`}>
              <ListItem 
                button 
                key={`listItem_${idx}`}
                component={Link}
                to={ `view/${item.id}` }>
                <ListItemText primary={`${item.first_name} ${item.last_name}`} />
              </ListItem>
              <Divider key={`divider_${idx}`}/>
            </Fragment>
          ))
        }
      </List>
      {
        this.renderBottom()
      }
      </>
    )
  }

  renderBottom = (item) => {
    const { classes } = this.props;

    return (
      <div>      
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          component={Link}
          to={ `/crudTutorial/create` }>
          작성
        </Button>
      </div>
    )
  }


  render() {
    const { items } = this.state;
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
        {
          isNil(items) === true ? (
            this.renderEmpty()
          ) : (
            this.renderItems(items.data)
          )
        }
        </div>
      </>
    )
  }
}

CrudTutorialList.propTypes = propTypes;
export default withStyles(styles)(CrudTutorialList);