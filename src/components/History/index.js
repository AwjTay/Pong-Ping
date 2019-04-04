import { connect } from "react-redux";
import History from "./History";

const mapStatetoProps = state => {

	return {
		History : state.gameHistory,
	}
}

console.log(History);

export default connect(mapStatetoProps)(History);