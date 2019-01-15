import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage4 extends Component {

  static defaultProps = {};

  render() {
    return (
      <>
        <div>
          <p>1. 파라미터 기본값 (Default Parameter value)</p>
          <p>ES5에서는 파라미터에 기본값을 설정할 수 없다. 따라서 적절한 인수가 전달되었는지 함수 내부에서 확인할 필요가 있다.</p>
          <p>ES6에서는 파라미터에 기본값을 설정하여 함수 내에서 수행하던 파라미터 체크 및 초기화를 간소화할 수 있다.</p>
        </div>
        <div>        
          <p>2. Rest 파라미터</p>
          <p>Rest 파라미터(Rest Parameter)는 Spread 연산자(...)를 사용하여 파라미터를 정의한 것을 의미한다. Rest 파라미터를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받을 수 있다.</p>
        </div>
        <div>
          <p>3. Spread 연산자</p>
          <p>Spread 연산자(Spread Operator, ...)는 연산자의 대상 배열 또는 이터러블을 개별 요소로 분리한다.</p>
        </div>
      </>
    )
  }

}

Es6lessonPage4.propTypes = propTypes;
export default Es6lessonPage4;