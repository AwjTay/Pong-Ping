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