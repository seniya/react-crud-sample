import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class reactTutorialPage4 extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>
        This is reactTutorialPage4 page
      </p>
    )
  }

}

reactTutorialPage4.propTypes = propTypes;
export default reactTutorialPage4;