import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class UserRead extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
        <p>1. 이터레이션 프로토콜(Iteration protocol)</p>
        <p>ES6에는 이터러블(iterable)과 이터레이터(iterator)를 정의한 이터레이션 프로토콜(iteration protocol)이 추가되었다.</p>
      </>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;