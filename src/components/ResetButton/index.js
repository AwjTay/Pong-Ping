import { connect } from "react-redux";
import ResetButton from "./ResetButton";

const mapDispatchtoProps = dispatch => {

	return {
		handleReset: () => dispatch({ type : "reset"})
	}
}

export default connect(null, mapDispatchtoProps)(ResetButton);

