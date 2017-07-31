import React from 'react';
import { Link } from 'react-router'
import './App.css';

const Header = () => {
    return (
        <div className="App-header"> 
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/trex'>T-rex</Link>
            <Link to='/brainwaves'>Brainwaves</Link>
        </div>
    );
}

export default Header;