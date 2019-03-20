import { connect } from "react-redux";
import ScoreField from "./ScoreField";

const mapStateToProps = state => {
	return {

		playerScore : state.player1score,
		serving : state.serving,
		whoWins : state.whoWins,
	};
};

const mapDispatchtoProps = dispatch => {

	return {
		handleIncrement: () => dispatch({ type : "incrementP1"})
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ScoreField);

//work out serving - possibly by altering in Scorefield1 and Scorefield2