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
        <p>ES6의 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순명료한 새로운 문법을 제시하고 있다. 그렇다고 ES6의 클래스가 새로운 객체지향 모델을 제공하는 것은 아니며, 사실 클래스도 함수이고 기존 프로토타입 기반 패턴의 Syntactic sugar일 뿐이다.</p>
      </>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;