import React from 'react';


const ResetButton = ({ handleReset }) => {

	return (

		<React.Fragment>

			 <button onClick={ handleReset } className="btn btn-danger">Reset</button>

		</React.Fragment>

	)

}

export default ResetButton;