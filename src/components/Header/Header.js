import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="title">
            <h1 >Bangladesh Cricket Player List</h1>
            <h2>Total Players:{props.players.length}</h2>
        </div>
    );
};

export default Header;