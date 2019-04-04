import axios from "../axios";
import { settings, loaded } from "./stateActions";

export const postGame = ({player1Name, player2Name, winningScore, serveInterval}) => dispatch => {
	axios.post("/", 
		{
			"player_1" : player1Name,
			"player_2" : player2Name,
			"winning_score" : winningScore,
			"change_serve" : serveInterval
				
	}).then(({ data }) => {
		dispatch(loaded(data.data));
	});

};

//use update task info to accept and use id below

export const updateGame = (player) => (dispatch, getState) => {
	const id = getState().id;
	axios.patch(`/${ id }/score`,
		{ 
			player : 1
		} 
	)
}
