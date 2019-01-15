import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage5 extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
        <p>1. 프로퍼티 축약 표현</p>
        <p>2. 프로퍼티 키 동적 생성</p>
        <p>3. 메소드 축약 표현</p>
        <p>4. __proto__ 프로퍼티에 의한 상속</p>
      </>
    )
  }

}

Es6lessonPage5.propTypes = propTypes;
export default Es6lessonPage5;