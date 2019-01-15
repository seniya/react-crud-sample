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
        <p>모듈이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다. 모듈은 세부 사항을 캡슐화하고 공개가 필요한 API만을 외부에 노출한다.</p>
        <p>ES6 모듈은 단 두 개의 키워드 export와 import를 제공한다.</p>
      </>
    )
  }

}

UserRead.propTypes = propTypes;
export default UserRead;