import React from 'react';
import ScoreField1 from './ScoreField/ScoreField1';
import ScoreField2 from './ScoreField/ScoreField2';
import ResetButton from './ResetButton/';
import DisplayWinner from './DisplayWinner/';

const App = ({ whoWins, history }) => (
    <React.Fragment>

        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        <ScoreField1
          player={ "Player 1" }         
        />

        <ScoreField2 
          player={ "Player 2" }
        />

        <DisplayWinner />

        <ResetButton />
        
    </React.Fragment>
);

export default App;