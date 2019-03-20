import { connect } from "react-redux";
import ScoreField from "./ScoreField";

const mapStateToProps = state => {
	return {
		playerScore : state.player2score,
		serving : !state.serving,
		whoWins : state.whoWins,
	};
};

const mapDispatchtoProps = dispatch => {

	return {
		handleIncrement: () => dispatch({ type : "incrementP2"})
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ScoreField);