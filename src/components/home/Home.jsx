import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Hello World! </h2>
                    <Link to={`${process.env.PUBLIC_URL}/Projects`}>Projects</Link>
                </Jumbotron>
                <div className="Homepage">
                    <header className="App-header">
                        <img src={`${process.env.PUBLIC_URL}/assets/react-logo.svg`} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to a SE Student's website!</h1>
                    </header>
                <p className="App-intro">
                    Man, How did you get here? This site is still under development.
                </p>
            </div>
            </Grid>
        );
    }
}

export default Home;
