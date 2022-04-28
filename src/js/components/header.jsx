import React from 'react';
import { FiUser } from 'react-icons/fi';
import { BsCart2 } from 'react-icons/bs';

function Header() {
  return (
    <div className="header-container">
      <div className="item-left">
        <img
          src="https://static.square-enix-games.com/headerbar/se-logo-white.svg"
          alt="nier replicant"
        />
      </div>
      <div className="item-right">
        <span>TOP GAMES</span>
        <span>NEWS</span>
        <span>STORE</span>
        <span>SUPPORT</span>
        <i><BsCart2 /></i>
        <i><FiUser /></i>
      </div>
    </div>
  );
}

export default Header;
