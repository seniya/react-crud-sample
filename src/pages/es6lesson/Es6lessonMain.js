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

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const propTypes = {
  classes: PropTypes.object
};

class Es6lessonMain extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      'items' : [
        {'link' : '/es6lesson/1', 'name' : '1. let, const와 블록 레벨 스코프'},
        {'link' : '/es6lesson/2', 'name' : '2. 템플릿 리터럴'},
        {'link' : '/es6lesson/3', 'name' : '3. 화살표 함수'},
        {'link' : '/es6lesson/4', 'name' : '4. 파라미터 기본값, Rest 파라미터, Spread 연산자'},
        {'link' : '/es6lesson/5', 'name' : '5. 객체 리터럴 프로퍼티 기능 확장'},
        {'link' : '/es6lesson/6', 'name' : '6. 디스트럭처링'},
        {'link' : '/es6lesson/7', 'name' : '7. 클래스'},
        {'link' : '/es6lesson/8', 'name' : '8. 모듈'},
        {'link' : '/es6lesson/9', 'name' : '9. 프로미스'},
        {'link' : '/es6lesson/10', 'name' : '10. 이터레이션 프로토콜(iteration protocol)과 for-of 루프'},
        {'link' : '/es6lesson/11', 'name' : '11. 7번째 타입 심볼(Symbol)'},
        {'link' : '/es6lesson/12', 'name' : '12. 제너레이터'},
        {'link' : '/es6lesson/13', 'name' : '13. Babel 6와 Webpack 4를 이용한 ES6 환경 구축'},
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

Es6lessonMain.propTypes = propTypes;
export default withStyles(styles)(Es6lessonMain);