import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Hello World! </h2>
                </Jumbotron>
                <div className="Homepage">
                    <header className="App-header">
                        <h1 className="App-title">Projects Page!!!!</h1>
                    </header>
                    <p className="App-intro">
                        Man, How did you get here? This site is still under development.
                    </p>
                </div>
            </Grid>
        );
    }
}

export default Projects;
