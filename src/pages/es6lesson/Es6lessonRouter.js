import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Es6lessonMain from './Es6lessonMain.js';
import Es6lessonPage1 from './Es6lessonPage1.js';
import Es6lessonPage2 from './Es6lessonPage2.js';
import Es6lessonPage3 from './Es6lessonPage3.js';
import Es6lessonPage4 from './Es6lessonPage4.js';
import Es6lessonPage5 from './Es6lessonPage5.js';
import Es6lessonPage6 from './Es6lessonPage6.js';
import Es6lessonPage7 from './Es6lessonPage7.js';
import Es6lessonPage8 from './Es6lessonPage8.js';
import Es6lessonPage9 from './Es6lessonPage9.js';
import Es6lessonPage10 from './Es6lessonPage10.js';
import Es6lessonPage11 from './Es6lessonPage11.js';
import Es6lessonPage12 from './Es6lessonPage12.js';
import Es6lessonPage13 from './Es6lessonPage13.js';



const propTypes = {
  classes: PropTypes.object
};

class Es6lessonRouter extends Component {

  static defaultProps = {};

  render() {
    const { match } = this.props;

    return (
      <div className="App-content">          
        <Switch>
          <Route exact path={ `/es6lesson` } render={(props) => <Es6lessonMain {...props} />} />
          <Route exact path={ `/es6lesson/1` } render={(props) => <Es6lessonPage1 {...props} />} />
          <Route exact path={ `/es6lesson/2` } render={(props) => <Es6lessonPage2 {...props} />} />
          <Route exact path={ `/es6lesson/3` } render={(props) => <Es6lessonPage3 {...props} />} />
          <Route exact path={ `/es6lesson/4` } render={(props) => <Es6lessonPage4 {...props} />} />
          <Route exact path={ `/es6lesson/5` } render={(props) => <Es6lessonPage5 {...props} />} />
          <Route exact path={ `/es6lesson/6` } render={(props) => <Es6lessonPage6 {...props} />} />
          <Route exact path={ `/es6lesson/7` } render={(props) => <Es6lessonPage7 {...props} />} />
          <Route exact path={ `/es6lesson/8` } render={(props) => <Es6lessonPage8 {...props} />} />
          <Route exact path={ `/es6lesson/9` } render={(props) => <Es6lessonPage9 {...props} />} />
          <Route exact path={ `/es6lesson/10` } render={(props) => <Es6lessonPage10 {...props} />} />
          <Route exact path={ `/es6lesson/11` } render={(props) => <Es6lessonPage11 {...props} />} />
          <Route exact path={ `/es6lesson/12` } render={(props) => <Es6lessonPage12 {...props} />} />
          <Route exact path={ `/es6lesson/13` } render={(props) => <Es6lessonPage13 {...props} />} />
          {
            ( match.url === '/es6lesson/' ) && <Redirect to={ `/es6lesson` } />
          }
        </Switch>
      </div>
    )
  }

}

Es6lessonRouter.propTypes = propTypes;
export default Es6lessonRouter;