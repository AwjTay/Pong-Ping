import React, { Component } from "react";

class StartGame extends Component {

	constructor (props) {
		super(props);

		this.state = {
			player1Name : "Player 1",
			player2Name : "Player 2",
			winningScore : "21",
			serveInterval : "5",
		}

		this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
		this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
		this.handleWinningScore = this.handleWinningScore.bind(this);
		this.handleServeInterval = this.handleServeInterval.bind(this);
	}

	handlePlayer1Name(e) {
		this.setState({ player1Name: e.currentTarget.value })
	}

	handlePlayer2Name(e) {
		this.setState({ player2Name: e.currentTarget.value })
	}

	handleWinningScore(e) {
		this.setState({ winningScore: e.currentTarget.value });
	}

	handleServeInterval(e) {
		this.setState({ serveInterval: e.currentTarget.value });
	}

	


	render() {

		return (
			<form onSubmit={ (e) =>  this.props.handleSave(e, this.state ) }>
				<div className="form-group">

					<label>Player 1 Name</label>
					<input value={ this.state.player1Name } onChange={ this.handlePlayer1Name } className="form-control"/>

					<label>Player 2 Name</label>
					<input value={ this.state.player2Name } onChange={ this.handlePlayer2Name } className="form-control"/>

					<label>Winning Score</label>
					<input value={ this.state.winningScore } onChange={ this.handleWinningScore } className="form-control"/>

					<label>Alternate Serve Every</label>
					<input value={ this.state.serveInterval } onChange={ this.handleServeInterval } className="form-control"/>

					<button className="btn-warning">Save</button>

	

				</div>
			</form>
		)
	}
}

export default StartGame;

//form this.props.handleSave(this.state)

//container handleSave : data => dispatch(settings(data))