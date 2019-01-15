import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class reactTutorialPage1 extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>
        This is reactTutorialPage1 page
      </p>
    )
  }

}

reactTutorialPage1.propTypes = propTypes;
export default reactTutorialPage1;