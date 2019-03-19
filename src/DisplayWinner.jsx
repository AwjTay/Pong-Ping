import React from 'react';
import './App.css';

const DisplayWinner = ({ whoWins }) => (

	<React.Fragment>

		<h2 className="jumbotron">{ whoWins === 0 ? "" : whoWins === 1 ? "Player One Wins" : "Player Two Wins" }</h2>

	</React.Fragment>

)

export default DisplayWinner;