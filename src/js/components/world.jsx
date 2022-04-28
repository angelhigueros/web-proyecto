import React from 'react';
import img from '../../assets/img/world.png';

import w1 from '../../assets/img/w1.png';
import w2 from '../../assets/img/w2.png';
import w3 from '../../assets/img/w3.png';
import w4 from '../../assets/img/w4.png';
import w5 from '../../assets/img/w5.png';

function World() {
  return (
    <div className="world-container" style={{ backgroundImage: `url(${img})` }}>
      <div className="world-list">
        <span className="world-title">WORLD</span>
        <div className="world-cards-1">
          <div className="world-item">
            <img src={w1} alt="character" />
            <h3>
              Village/Northern
              <br />
              Pains
            </h3>
          </div>
          <div className="world-item">
            <img src={w2} alt="character" />
            <h3>
              Facade/Barren
              <br />
              Temple
            </h3>
          </div>
          <div className="world-item">
            <img src={w3} alt="character" />
            <h3>
              The Aerie
            </h3>
          </div>
        </div>
        <div className="world-cards-2">
          <div className="world-item">
            <img src={w4} alt="character" />
            <h3>
              Junk Heap
            </h3>
          </div>
          <div className="world-item">
            <img src={w5} alt="character" />
            <h3>
              Seafront
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default World;
