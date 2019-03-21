import { connect } from "react-redux";
import ScoreField from "./ScoreField";
import actions, { handleIncrementP1 } from "../../data/actions"

const mapStateToProps = state => {
	return {
		playerName : state.player1Name,
		playerScore : state.player1score,
		serving : state.serving,
		whoWins : state.whoWins,
	};
};

const mapDispatchtoProps = dispatch => {

	return {
		handleIncrement: () => dispatch(handleIncrementP1())
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ScoreField);

//work out serving - possibly by altering in Scorefield1 and Scorefield2