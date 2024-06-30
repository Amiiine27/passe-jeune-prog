import React from 'react';
import logo from '../assets/logo.png';
import '../Style/Header.css';

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <div className='vertical-line'></div>
        <div className="nom">
            <p>PASS</p>
            <p>JEUNE</p>
        </div>
      </div>
      <hr className='horizontal-line' />
    </header>
  );
}

export default Header;
