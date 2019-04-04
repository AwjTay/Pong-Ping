import { connect } from "react-redux";
import ScoreField from "./ScoreField";
import actions, { handleIncrementP2 } from "../../data/stateActions"

const mapStateToProps = state => {
	return {
		playerName : state.player2Name,
		playerScore : state.player2score,
		serving : !state.serving,
		whoWins : state.whoWins,
	};
};

const mapDispatchtoProps = dispatch => {

	return {
		handleIncrement: () => dispatch(handleIncrementP2())
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ScoreField);