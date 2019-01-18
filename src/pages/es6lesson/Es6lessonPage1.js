import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class Es6lessonPage1 extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      'counter' : 0
    }
  }

  handleClick = (event) => {
    console.log('handleClick : ', event);

    this.setState(
      { 'counter' : ++this.state.counter }, ()=> {
        console.log('this.state.counter : ', this.state.counter);
      }

    )
  }

  render() {
    return (
      <>
        <p>
        var와 let, 그리고 const는 다음처럼 사용하는 것을 추천한다.
        </p>
        <p>
        ES6를 사용한다면 var 키워드는 사용하지 않는다.
        </p>
        <p>
        재할당이 필요한 변수에는 let을 사용한다.
        </p>
        <p>
        변경이 발생하지 않는(재할당이 필요 없는) 원시 타입과 객체 타입에는 const를 사용한다.
        </p>
        <p>
          <a href="https://www.naver.com">a 링크 scss 테스트</a>
        </p>

        <div>
          <button 
            onClick={this.handleClick}
            className="btn btn-primary">
            Don't click me {this.state.counter} times!
          </button>
        </div>

      </>
    )
  }

}

Es6lessonPage1.propTypes = propTypes;
export default Es6lessonPage1;