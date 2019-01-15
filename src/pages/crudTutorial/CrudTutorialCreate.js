import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil, isEmpty } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import UsersAPI from '../../services/network/UsersAPI';

const propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  container : {
    backgroundColor: '#ffffff',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CrudTutorialCreate extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      'name' : '',
      'job' : '',
    };
  }

  componentDidMount() {    

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, job } = this.state;

    if (isNil(name) || isEmpty(name)) {
      return;
    }
    if (isNil(job) || isEmpty(job)) {
      return;
    }

    const formData = {
      'name' : name,
      'job' : job,
    }
    this.requestApi(formData);
  }

  requestApi = async(data) => {
    let promise = await UsersAPI.create({}, data)
      .catch( err => { })
      .finally( fin => { });    
    console.log('requestApi : ', promise);
    this.props.history.push('/crudTutorial');
  }

  renderItem = (item) => {
    const { classes } = this.props;
    return (
      <>
        <div>
          <TextField
            required
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"/>

          <TextField
            required
            id="job"
            label="Job"
            className={classes.textField}
            value={this.state.job}
            onChange={this.handleChange}
            margin="normal"/>
        </div>
        
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
          type="submit"
          variant="contained" 
          color="primary" 
          className={classes.button}>
          저장
        </Button>        
      </div>
    )
  }



  render() {
    const { classes } = this.props;
    return (
      <>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        {
          this.renderItem()
        }
        </form>
      </>
    )
  }

}

CrudTutorialCreate.propTypes = propTypes;
export default withStyles(styles)(CrudTutorialCreate);