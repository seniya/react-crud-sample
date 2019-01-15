import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class reactTutorialPage2 extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>
        This is reactTutorialPage2 page
      </p>
    )
  }

}

reactTutorialPage2.propTypes = propTypes;
export default reactTutorialPage2;