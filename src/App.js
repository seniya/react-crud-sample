import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './components/appbar/AppBar.js';
import Es6lessonRouter from './pages/es6lesson/Es6lessonRouter.js';
import ReactTutorialRouter from './pages/reactTutorial/ReactTutorialRouter.js';
import CrudTutorial from './pages/crudTutorial/CrudTutorial.js';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">          
          <HashRouter>
            <div>
              <AppBar />
              <Switch>
                <Route exact path="/" render={ () => ( <Redirect to="/es6lesson" /> ) }/>
                <Route path="/es6lesson" component={ Es6lessonRouter } />
                <Route path="/reactTutorial" component={ ReactTutorialRouter } />
                <Route path="/crudTutorial" component={ CrudTutorial } />
              </Switch>
            </div>
          </HashRouter>
        </div>        
      </>
    );
  }
}

export default App;
