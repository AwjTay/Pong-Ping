import React from 'react';
import ScoreField1 from '../ScoreField/ScoreField1';
import ScoreField2 from '../ScoreField/ScoreField2';
import ResetButton from '../ResetButton/';
import DisplayWinner from '../DisplayWinner/';
import History from "../History/";
import StartGame from "../StartGame/";

const App = ({player1Name, winningScore, serveInterval}) => ( 

    
    player1Name === "" ? <StartGame /> : 

    <React.Fragment>

        <header className="page-header">
            <h1>PongPing</h1>
            <table className="table-bordered">
              <tr>
                <th scope="col">Playing to: { winningScore }</th>
              </tr>
              <tr>
              <th scope="col">Serve interval: { serveInterval }</th>
              </tr>
            </table>
        </header>

        <ScoreField1 />

        <ScoreField2 />

        <DisplayWinner />

        <ResetButton />

        <History />
        
    </React.Fragment> 
);

export default App;