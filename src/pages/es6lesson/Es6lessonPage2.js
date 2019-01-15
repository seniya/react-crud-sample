import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage2 extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
      <p>
        ES6는 템플릿 리터럴(Template literal)이라고 불리는 새로운 문자열 표기법을 도입하였다. 템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.
      </p>
      <pre>
        const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;
      </pre>
      </>
    )
  }

}

Es6lessonPage2.propTypes = propTypes;
export default Es6lessonPage2;