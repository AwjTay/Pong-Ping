import { connect } from "react-redux";
import History from "./History";

const mapStatetoProps = state => {

	return {
		History : state.History,
	}
}

export default connect(mapStatetoProps)(History);