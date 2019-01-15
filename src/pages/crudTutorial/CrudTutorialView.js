import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import UsersAPI from '../../services/network/UsersAPI';


const propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CrudTutorialView extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      'item' : null,
      'expanded': false, 
      'open' : false,
    };
  }

  componentDidMount() {    
    const id = this.props.match.params.id;
    console.log('componentDidMount : ', id);
    this.requestApi(id);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleDeleteClick = async() => {
    const id = this.props.match.params.id;
    let user = await UsersAPI.delete({}, id)
      .catch( err => { })
      .finally( fin => { });
    console.log('handleDeleteClick : ', user);
    this.handleClose();
    this.props.history.push('/crudTutorial');
  }



  requestApi = async(id) => {
    let user = await UsersAPI.read({}, id)
      .catch( err => { })
      .finally( fin => { });
    this.setState({ 'item': user.data });
  }

  renderEmpty = () => {
    return (
      <p>no item</p>
    )
  }

  renderItems = (item) => {
    const { classes } = this.props;

    return (
      <div className={"crudTurorial-view"}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>{item.id}</Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={`${item.first_name} ${item.last_name}`}
          subheader={ moment().format('MMMM Do YYYY, h:mm a') } />
        <CardMedia
          className={classes.media}
          image={`${item.avatar}`}
          title="Paella dish" />
        <CardContent>
          <Typography component="p">
            {item.avatar}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              이곳에 설명이 들어갑니다.
              이곳에 설명이 들어갑니다.
              이곳에 설명이 들어갑니다.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {
        this.renderBottom(item)
      }
      </div>
    )
  }

  renderBottom = (item) => {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>      
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          component={Link}
          to={ `/crudTutorial/update/${item.id}` }>
          수정
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          className={classes.button}
          onClick={this.handleClickOpen}>
          삭제
        </Button>

        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"삭제 하시겠습니까?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              해당 게시글(사용자)를 삭제 하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              아니오
            </Button>
            <Button onClick={this.handleDeleteClick} color="primary" autoFocus>
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  render() {    
    const { classes } = this.props;
    const { item } = this.state;

    return (
      <>
        <div className={classes.root}>
        {
          isNil(item) === true ? (
            this.renderEmpty()
          ) : (
            this.renderItems(item.data)
          )
        }
        </div>
      </>
    )
  }

}

CrudTutorialView.propTypes = propTypes;
export default withStyles(styles)(CrudTutorialView);