import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class UserRead extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>ES6에서 도입된 제너레이터(Generator)는 함수 블록을 한 번에 실행하지 않고, 실행을 일시 중지했다가 필요한 시점에 다시 시작할 수 있는 함수이다. 제너레이터는 함수이지만 일반 함수와는 다른 독특한 동작을 한다. 함수를 호출하면 함수 블록이 실행되지만, 제너레이터는 제너레이터 객체를 반환한다. 이 제너레이터 객체는 순회 가능한(iterable) 값이다. 즉, 제너레이터는 순회 가능한(iterable)한 값을 생성하는(gererate) 함수이다. 제너레이터는 이터러블의 구현과 비동기 함수의 호출 차단 등에 유용하다.</p>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;