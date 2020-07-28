import React from 'react';
import { Link } from 'react-router-dom';
const style = {
    textDecoration: 'none'
};
export const Nav = () => (
    <nav>
        <ul className="nav-links">
            <li>Tasks</li>
            <li>FAQ</li>
            <Link to="/form" style={style}>
                <li>Contact us</li>
            </Link>
            <Link to="/game" style={style}>
                <li>Game</li>
            </Link>
        </ul>
    </nav>
);