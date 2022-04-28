import React from 'react';
import { AiFillSound } from 'react-icons/ai';

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="item-logo">
        <img src="https://fyre.cdn.sewest.net/nier-replicant/611c7bf05346b200197741dc/logo-AWGjnEPeX.png" alt="nier replicant" />
      </div>
      <div className="item-menu">
        <span>GAME</span>
        <span>CHARACTERS</span>
        <span>WORLD</span>
        <span>MEDIA</span>
        <span>GAMEPLAY</span>
        <span>ART GALLERY</span>
        <span className="item-1">BLOG</span>
        <span className="item-2">BUY NOW</span>
        <span><AiFillSound /></span>
      </div>
    </div>
  );
}

export default NavBar;
