import { connect } from "react-redux";
import App from "./App";

const mapStatetoProps = state => {
	return {
		player1Name : state.player1Name,
		player2Name : state.player2Name,
		winningScore : state.winningScore,
		serveInterval : state.serveInterval,
}
}
export default connect(mapStatetoProps)(App);