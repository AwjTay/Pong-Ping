import React from 'react';
import './App.css';

const App = ({ player1, player2, handleIncrementP1, handleIncrementP2, handleReset, whoIsServing, whoWins }) => (
    <React.Fragment>
        {/* header */}
        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 { !whoIsServing ? <span className="pull-right label label-success">Serving</span> : null} </p>
                <p className="well">{ player1 }</p>
                {!whoWins && <button onClick={ handleIncrementP1 } className="btn btn-primary">+</button>}
            </div>

            <div className="col-xs-6">
                <p>Player 2 { whoIsServing ? <span className="pull-right label label-success">Serving</span> : null}</p>
                <p className="well">{ player2 }</p>
                {!whoWins && <button onClick={ handleIncrementP2 } className="btn btn-primary">+</button>}
            </div>
        </div>

        { /* winner message */}
        <h2 className="jumbotron">{ whoWins === 0 ? "" : whoWins === 1 ? "Player One Wins" : "Player Two Wins" }</h2>

        <hr />

        { /* reset button */}
        <button onClick={ handleReset } className="btn btn-danger">Reset</button>
    </React.Fragment>
);

export default App;