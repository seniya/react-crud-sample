import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class reactTutorialPage3 extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>
        This is reactTutorialPage3 page
      </p>
    )
  }

}

reactTutorialPage3.propTypes = propTypes;
export default reactTutorialPage3;