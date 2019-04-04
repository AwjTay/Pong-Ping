import { connect } from "react-redux";
import DisplayWinner from "./DisplayWinner";

const mapStateToProps = state => {
	return {

		whoWins : state.whoWins,
		player1Name : state.player1Name,
		player2Name : state.player2Name,
		
	};
};

export default connect(mapStateToProps)(DisplayWinner);