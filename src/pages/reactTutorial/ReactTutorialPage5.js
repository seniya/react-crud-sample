import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  classes: PropTypes.object
};

class reactTutorialPage5 extends Component {

  static defaultProps = {};

  render() {
    return (
      <p>
        This is reactTutorialPage5 page
      </p>
    )
  }

}

reactTutorialPage5.propTypes = propTypes;
export default reactTutorialPage5;