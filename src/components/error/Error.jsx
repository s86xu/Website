import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Error.css';

class Errorpage extends React.Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> This is an Error Page!!!! </h2>
                    <Link to={`${process.env.PUBLIC_URL}/Home`}>Go back to home</Link>
                </Jumbotron>
                <div className="Homepage">
                    <header className="App-header">
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

export default Errorpage;
