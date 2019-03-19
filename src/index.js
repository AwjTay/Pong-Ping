import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";


const initial = {
    player1: 0,
    player2: 0,
    serving : false,
    whoWins : 0,
};

const setScoreP1 = state => ({...state, player1: state.player1 + 1});
const setScoreP2 = state => ({...state, player2: state.player2 + 1});

const setServer = state => (state.player1 + state.player2) % 5 === 0 ? {...state, serving : !state.serving } : state;

const serviceOver20 = state => state.player1 >= 20 && state.player2 >= 20 && (state.player1 + state.player2) % 2 === 0 ? {...state, serving : !state.serving } : state;

const winning1 = state => state.player1 >= 21 && (state.player1 - state.player2) > 1 ? {...state, whoWins : 1 } : state;

const winning2 = state => state.player2 >= 21 && (state.player2 - state.player1) > 1 ? {...state, whoWins : 2 } : state;  

const reducer = (state, action) => {
	switch (action.type) {
		case "incrementP1" : return serviceOver20(winning1(setServer(setScoreP1(state))));
		case "incrementP2" : return serviceOver20(winning2(setServer(setScoreP2(state))));
		case "reset" : return initial;
		default: return state;
	}
}



const store = createStore(
	reducer, 
	initial,
	window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
		let state = store.getState();
		
		ReactDOM.render(
			<App 
			player1={ state.player1 } 
			player2={ state.player2 }
			handleIncrementP1={ () => store.dispatch({ type : "incrementP1"}) }
			handleIncrementP2={ () => store.dispatch({ type : "incrementP2"}) }
			handleReset={ () => store.dispatch({ type : "reset"}) }
			whoIsServing={ state.serving }
			whoWins={ state.whoWins }
			/>,
			document.getElementById("root")
		);
	};

store.subscribe(render);
render();








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*const setServer = state => {

	if (state.player1 >= 20 && state.player2 >= 20) {

		(state.player1 + state.player2) % 2 === 0 ? {...state, serving : !state.serving } : state;
		
	} else {
	
		(state.player1 + state.player2) % 5 === 0 ? {...state, serving : !state.serving } : state;
	}
}*/
