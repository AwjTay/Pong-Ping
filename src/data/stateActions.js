export const handleIncrementP1  = (amount) => {

	return {
		type : "incrementP1",
	};
};

export const handleIncrementP2  = (amount) => {

	return {
		type : "incrementP2",
	};
};

export const handleReset = () => {

	return {
		type : "reset",
	};
};

export const settings = ({player1Name, player2Name, winningScore, serveInterval}) => ({

	type: "settings",
	player1Name,
	player2Name,
	winningScore,
	serveInterval,

});

export const loaded = ({player_1, player_2, change_serve, winning_score, id}) => {
	return {
		type : "loaded",
		player1Name : player_1,
	    player2Name : player_2,
	    winningScore : winning_score,
	    serveInterval : change_serve,
	    id,
	}
}