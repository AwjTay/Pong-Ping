import React from 'react';
import './App.css';

const History = ({ history }) => (

	<React.Fragment>

		<ul className="list-group">
			{history.map((result) => 
				<li

			)}
		</ul>

	</React.Fragment>

)

export default History;