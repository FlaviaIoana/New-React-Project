import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill({ value: '', winner: false }));
    const [xIsNext, setXisNext] = useState(true);
    let winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board];
        if (boardCopy[i].value) return;
        boardCopy[i] = xIsNext ? { value: 'X', winner: false } : { value: '0', winner: false };
        winner = calculateWinner(board)
        if (winner) {
            // boardCopy.forEach(element => element.winner = true);
            for (let i = 0; i < boardCopy.length; i++) {
                board[i] = { winner: true };
            }
            return;
        }
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill({ value: '', winner: false }))}>Start game</button>
    )
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'CONGRATULATIONS!!! Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()};
    </div>
        </>
    )
}

export default Game;