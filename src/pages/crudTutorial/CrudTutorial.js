import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import CrudTutorialList from './CrudTutorialList.js';
import CrudTutorialView from './CrudTutorialView.js';
import CrudTutorialCreate from './CrudTutorialCreate.js';
import CrudTutorialUpdate from './CrudTutorialUpdate.js';



const propTypes = {
  classes: PropTypes.object
};

class CrudTutorial extends Component {

  static defaultProps = {};

  render() {
    const { match } = this.props;

    return (
      <div className="App-content">          
        <Switch>
          <Route exact path={ `${ match.url }/list` } render={(props) => <CrudTutorialList {...props} />} />
          <Route exact path={ `${ match.url }/create` } render={(props) => <CrudTutorialCreate {...props} />} />
          <Route exact path={ `${ match.url }/update/:id` } render={(props) => <CrudTutorialUpdate {...props} />} />
          <Route path={ `${ match.url }/view/:id` } render={(props) => <CrudTutorialView {...props} />} />
          {
            ( match.url === '/crudTutorial' || match.url === '/crudTutorial/' ) && <Redirect to={ `${ match.url }/list` } />
          }
        </Switch>
      </div>
    )
  }

}

CrudTutorial.propTypes = propTypes;
export default CrudTutorial;