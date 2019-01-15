import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage3 extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
        <p>
          화살표 함수(Arrow function)는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다. 하지만 모든 경우 화살표 함수를 사용할 수 있는 것은 아니다. 화살표 함수의 기본 문법은 아래와 같다.
        </p>
      </>
    )
  }

}

Es6lessonPage3.propTypes = propTypes;
export default Es6lessonPage3;