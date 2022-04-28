import React from 'react';
import img from '../../assets/img/characters.png';

import p1 from '../../assets/img/p1.jpg';
import p2 from '../../assets/img/p2.jpg';
import p3 from '../../assets/img/p3.jpg';
import p4 from '../../assets/img/p4.jpg';
import p5 from '../../assets/img/p5.jpg';

import p6 from '../../assets/img/p6.jpg';
import p7 from '../../assets/img/p7.jpg';
import p8 from '../../assets/img/p8.jpg';
import p9 from '../../assets/img/p9.jpg';

function Characters() {
  return (
    <div
      className="characters-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="characters-story">
        <span>CHARACTERS</span>
        <div className="characters-cards-1">
          <div className="characters-item">
            <img src={p1} alt="character" />
            <h3>PROTAGONIST</h3>
          </div>
          <div className="characters-item">
            <img src={p2} alt="character" />
            <h3>YONAH</h3>
          </div>
          <div className="characters-item">
            <img src={p3} alt="character" />
            <h3>KAINÉ</h3>
          </div>
          <div className="characters-item">
            <img src={p4} alt="character" />
            <h3>EMIL</h3>
          </div>
          <div className="characters-item">
            <img src={p5} alt="character" />
            <h3>DEVOLA & POPOLA</h3>
          </div>
        </div>
        <div className="characters-cards-2">
          <div className="characters-item">
            <img src={p6} alt="character" />
            <h3>KING OF FACAD</h3>
          </div>
          <div className="characters-item">
            <img src={p7} alt="character" />
            <h3>FYRA</h3>
          </div>
          <div className="characters-item">
            <img src={p8} alt="character" />
            <h3>LOUISE - MERMAID PRINCESS</h3>
          </div>
          <div className="characters-item">
            <img src={p9} alt="character" />
            <h3>15 NIGHTMARES PROTAGONIST</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characters;
