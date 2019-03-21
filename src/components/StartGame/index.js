import { connect } from "react-redux";
import StartGame from "./StartGame";
import { settings } from "../../data/actions"


const mapStatetoProps = state => {
	return {
		player1Name : state.player1Name,
    	player2Name : state.player2Name,
		winningScore : state.winningScore,
		serveInterval : state.serveInterval,
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		handleSave: (e, data) =>{ 
			e.preventDefault()
			dispatch(settings(data)) 
		}
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StartGame);