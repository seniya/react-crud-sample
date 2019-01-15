import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import ReactTutorialMain from './ReactTutorialMain.js';
import ReactTutorialPage1 from './ReactTutorialPage1.js';
import ReactTutorialPage2 from './ReactTutorialPage2.js';
import ReactTutorialPage3 from './ReactTutorialPage3.js';
import ReactTutorialPage4 from './ReactTutorialPage4.js';
import ReactTutorialPage5 from './ReactTutorialPage5.js';



const propTypes = {
  classes: PropTypes.object
};

class ReactTutorialRouter extends Component {

  static defaultProps = {};

  render() {
    const { match } = this.props;

    return (
      <div className="App-content">          
        <Switch>
          <Route exact path={ `/reactTutorial` } render={(props) => <ReactTutorialMain {...props} />} />
          <Route exact path={ `${ match.url }/1` } render={(props) => <ReactTutorialPage1 {...props} />} />
          <Route exact path={ `${ match.url }/2` } render={(props) => <ReactTutorialPage2 {...props} />} />
          <Route exact path={ `${ match.url }/3` } render={(props) => <ReactTutorialPage3 {...props} />} />
          <Route exact path={ `${ match.url }/4` } render={(props) => <ReactTutorialPage4 {...props} />} />
          <Route exact path={ `${ match.url }/5` } render={(props) => <ReactTutorialPage5 {...props} />} />          
          {
            ( match.url === '/reactTutorial/' ) && <Redirect to={ `/reactTutorial` } />
          }
        </Switch>
      </div>
    )
  }

}

ReactTutorialRouter.propTypes = propTypes;
export default ReactTutorialRouter;