import React, { Component } from 'react';
import './App.css';

const App = () => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 <span className="pull-right label label-success">Serving</span></p>
                <p className="well">{/* player 1 score */}</p>
                <button className="btn btn-primary">+</button>
            </div>

            <div className="col-xs-6">
                <p>Player 2 <span className="pull-right label label-success">Serving</span></p>
                <p className="well">{/* player 2 score */}</p>
                <button className="btn btn-primary">+</button>
            </div>
        </div>

        { /* winner message */}
        <h2 className="jumbotron">Player {/* winning player here */} wins!</h2>

        <hr />

        { /* reset button */}
        <button className="btn btn-danger">Reset</button>
    </React.Fragment>
);

export default App;