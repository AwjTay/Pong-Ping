import { connect } from "react-redux";
import ScoreField from "./ScoreField";
import actions, { handleIncrementP1 } from "../../data/stateActions"
import { updateGame } from "../../data/apiActions";

const mapStateToProps = state => {
	return {
		playerName : state.player1Name,
		playerScore : state.player1score,
		serving : state.serving,
		whoWins : state.whoWins,
	};
};

const mapDispatchtoProps = dispatch => {

	//use patch action as dispath argument here and pass it the relevant player

	return {
		handleIncrement: () => dispatch(handleIncrementP1())
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ScoreField);

