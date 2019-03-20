import initial from "./initial";
//functions for reducer

const updateHistory = state => {


	if (state.player1score === 21 || state.player2score === 21) {

		let result = {PlayerOneFinalScore : state.player1score, PlayerTwoFinalScore : state.player2score, At : new Date()}
		return {...state, gameHistory : [...state.gameHistory, result] };

	} else {
		return state;			
	}
}

const setScoreP1 = state => ({...state, player1score: state.player1score + 1});
const setScoreP2 = state => ({...state, player2score: state.player2score + 1});

const setServer = state => (state.player1score + state.player2score) % 5 === 0 ? {...state, serving : !state.serving } : state;

const serviceOver20 = state => state.player1 >= 20 && state.player2 >= 20 && (state.player1 + state.player2) % 2 === 0 ? {...state, serving : !state.serving } : state;

const winning1 = state => state.player1score >= 21 && (state.player1score - state.player2score) > 1 ? {...state, whoWins : 1 } : state;

const winning2 = state => state.player2score >= 21 && (state.player2score - state.player1score) > 1 ? {...state, whoWins : 2 } : state;  


//reducer

const reducer = (state, action) => {
	switch (action.type) {
		case "incrementP1" : return updateHistory(serviceOver20(winning1(setServer(setScoreP1(state)))));
		case "incrementP2" : return updateHistory(serviceOver20(winning2(setServer(setScoreP2(state)))));
		case "reset" : return initial;
		default: return state;
	}
}

export default reducer;
