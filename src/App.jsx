import React from 'react';
import './App.css';
import ScoreField from './ScoreField';
import ResetButton from './ResetButton';
import DisplayWinner from './DisplayWinner';

const App = ({ player1score, player2score, handleIncrementP1, handleIncrementP2, handleReset, serving, whoWins, history }) => (
    <React.Fragment>

        <header className="page-header">
            <h1>PongPing</h1>
        </header>

        <ScoreField
          player={ "Player 1" }
          playerScore={ player1score }
          handleIncrement={ handleIncrementP1 }
          serving={ !serving ? <span className="pull-right label label-success">Serving</span> : null }
          whoWins={ whoWins }
        />

        <ScoreField
          player={ "Player 2" }
          playerScore={ player2score }
          handleIncrement={ handleIncrementP2 }
          serving={ serving ? <span className="pull-right label label-success">Serving</span> : null }
          whoWins={ whoWins }
        />

        <DisplayWinner 
          whoWins={ whoWins }
        />

        <ResetButton
          handleReset={ handleReset }
        />
        
    </React.Fragment>
);

export default App;