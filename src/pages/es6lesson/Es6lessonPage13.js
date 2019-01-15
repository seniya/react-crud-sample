import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class UserRead extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>현재 브라우저는 ES6를 완전하게 지원하지 않는다...</p>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;