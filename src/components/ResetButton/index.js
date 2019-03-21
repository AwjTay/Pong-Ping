import { connect } from "react-redux";
import ResetButton from "./ResetButton";
import actions, { handleReset } from "../../data/actions"


const mapDispatchtoProps = dispatch => {

	return {
		handleReset: () => dispatch(handleReset())
	}
}

export default connect(null, mapDispatchtoProps)(ResetButton);

