import React from 'react';
import Square from './Square'

const style = {
    border: '4px solid blue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    marginTop: '50px'
}

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square.value} onClick={() => onClick(i)} winner={square.winner} />
        ))}
        {/* <Square value="1" onClick={() => onClick("dummy value")} /> */}
    </div>
)

export default Board;