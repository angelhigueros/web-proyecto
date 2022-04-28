import React from 'react';
import img from '../../assets/img/story-2.png';

import g1 from '../../assets/img/g1.jpg';
import g2 from '../../assets/img/g2.jpg';
import g3 from '../../assets/img/g3.jpg';
import g4 from '../../assets/img/g4.jpg';
import g5 from '../../assets/img/g5.jpg';
import g6 from '../../assets/img/g6.jpg';

function Gameplay() {
  return (
    <div className="world-container" style={{ backgroundImage: `url(${img})` }}>
      <div className="world-list">
        <span className="world-title">GAMEPLAY</span>
        <div className="world-cards-1">
          <div className="world-item">
            <img src={g1} alt="character" />
            <h3>
              Battle
            </h3>
          </div>
          <div className="world-item">
            <img src={g2} alt="character" />
            <h3>
              Weapons
            </h3>
          </div>
          <div className="world-item">
            <img src={g3} alt="character" />
            <h3>
              Magic
            </h3>
          </div>
        </div>
        <div className="world-cards-1">
          <div className="world-item">
            <img src={g4} alt="character" />
            <h3>
              Word Edit
            </h3>
          </div>
          <div className="world-item">
            <img src={g5} alt="character" />
            <h3>
              Animals /
              <br />
              Fishing /
              <br />
              Cultivation
            </h3>
          </div>
          <div className="world-item">
            <img src={g6} alt="character" />
            <h3>
              Auto Battle
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
