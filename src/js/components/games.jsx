import React from 'react';

function Games() {
  return (
    <div className="games-container">
      <div className="games-item">
        <img
          src="https://fyre.cdn.sewest.net/nier-replicant/612d3e0ec759070012a81321/automata_400x311_banner-luMgXjUfC.jpg"
          alt=""
        />
        <button type="button">LEARN MORE</button>
      </div>
      <div className="games-item">
        <img
          src="https://fyre.cdn.sewest.net/nier-replicant/612d1b0bc759070012a7f034/store_400x311_banner-_FVPtnQ5m.jpg"
          alt=""
        />
        <button type="button">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Games;
