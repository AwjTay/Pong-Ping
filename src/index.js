import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./data/reducers";
import initial from "./data/initial";



ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
document.getElementById("root"),
);

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	
const store = createStore(
	reducer,
	initial,
	composeEnhancers(applyMiddleware(thunk))
);



/*
const store = createStore(
	reducers, 
	initial,
	composeEnhancers(applyMiddleware(thunk)),
	window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
);
*/








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
