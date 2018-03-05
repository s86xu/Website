import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

// Components.
import {Homepage} from './components/homepage/homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename='/~s86xu'>
          <Switch>
            <Redirect exact from='/' to='/Home'/>
            <Route path='/Home' component={Homepage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
