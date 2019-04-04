import React from "react";



const History = ({ History }) => (

	


		<React.Fragment>
			<table className="table-bordered" style={{width : "100%", marginTop : 20}}>
				<tbody>
					<tr>
						<th>Winner</th>
						<th>Player 1 Score</th>
						<th>Player 2 Score</th>
					</tr>
					<tr>
					{ History.map((data) => 
						<React.Fragment>	
							<td key={ data[0] }>
								{ data[0] }
							</td>
							<td key={ data[1] }>
								{ data[1] }
							</td>
							<td key={ data[2] }>
								{ data[2] }
							</td>
						</React.Fragment>
					)}
					</tr>	

					
						}
				</tbody>

			</table>


		</React.Fragment> 
	
)

export default History;