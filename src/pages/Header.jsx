import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Navber'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
