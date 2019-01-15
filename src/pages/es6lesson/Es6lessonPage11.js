import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class UserRead extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>1. Symbol이란? 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.</p>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;