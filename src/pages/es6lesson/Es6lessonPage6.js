import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage6 extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
        <p>1. 배열 디스트럭처링 (Array destructuring</p>
        <p>2. 객체 디스트럭처링 (Object destructuring)</p>
      </>
    )
  }

}

Es6lessonPage6.propTypes = propTypes;
export default Es6lessonPage6;