import React from 'react';


const ScoreField = ( { playerScore, handleIncrement, serving, whoWins, playerName } ) => (

	//use a combination of player prop (from App) and serving (from MapState) to write the serving logic in here


	<React.Fragment>

		<div className="row">
            <div className="col-xs-6">
            	{ !serving ? <span className="pull-right label label-success">Serving</span> : null }
                <p>{ playerName } { serving } </p>
                <p className="well">{ playerScore }</p>
                {!whoWins && <button onClick={ handleIncrement } className="btn btn-primary">+</button>}
            </div>
        </div>

	</React.Fragment>
);

export default ScoreField;