import React from 'react';
import logo from '../../images/logo.svg';

import './homepage.css';

class Homepage extends React.Component {
    render() {
        return (
            <div className="Homepage">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to a SE Student's website!</h1>
                </header>
                <p className="App-intro">
                    Man, How did you get here? This site is still under development.
                </p>
            </div>
        );
    }
}

export {Homepage};
