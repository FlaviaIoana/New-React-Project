import React from 'react';
// import {calculateWinner as winner} from '../helpers';

const Square = ({ value, onClick, winner }) => (
    <button style={{
        background: (winner !== false) ? 'yellow' : 'lightblue',
        border: '2px solid darkblue',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }}
        onClick={onClick}>
        {value}
    </button>
);

export default Square;