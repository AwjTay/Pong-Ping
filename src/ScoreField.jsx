import React from 'react';
import './App.css';

const ScoreField = ( {playerScore, handleIncrement, serving, whoWins, player,} ) => (

	<React.Fragment>

		<div className="row">
            <div className="col-xs-6">
                <p>{ player } { serving } </p>
                <p className="well">{ playerScore }</p>
                {!whoWins && <button onClick={ handleIncrement } className="btn btn-primary">+</button>}
            </div>
        </div>

	</React.Fragment>
);

export default ScoreField;