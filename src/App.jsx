import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

// Components.
import Homepage from './components/home/Home';
import Projects from './components/projects/Projects';
import Errorpage from './components/error/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/Home`}/>
            <Route path={`${process.env.PUBLIC_URL}/Home`} render={() => <Homepage />}/>
            <Route path={`${process.env.PUBLIC_URL}/Projects`} render={() => <Projects />}/>
            <Route path={`${process.env.PUBLIC_URL}/Error`} render={() => <Errorpage />}/>
            <Redirect to={`${process.env.PUBLIC_URL}/Error`}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
