import { connect } from "react-redux";
import DisplayWinner from "./DisplayWinner";

const mapStateToProps = state => {
	return {

		whoWins : state.whoWins,
		
	};
};

export default connect(mapStateToProps)(DisplayWinner);