/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import img from '../../assets/img/gallery.png';
import img1 from '../../assets/img/bn1.png';
import img2 from '../../assets/img/bn2.png';
import img3 from '../../assets/img/bn3.png';

function BuyNow() {
  const [view, setView] = useState(1);

  return (
    <div
      className="gallery-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="gallery-list">
        <span className="world-title">BUY NOW</span>
        <h3>SELECT YOUR COUNTRY</h3>
        <div className="buynow-buttons">
          <button
            style={{ backgroundColor: view === 1 ? '#000000' : '' }}
            onClick={() => setView(1)}
            type="button"
            className="gamestore-btn-1"
          >
            PHYSICAL EDITION
          </button>
          <button
            style={{ backgroundColor: view === 2 ? '#000000' : '' }}
            onClick={() => setView(2)}
            type="button"
            className="gamestore-btn-2"
          >
            DIGITAL EDITION
          </button>
          <button
            style={{ backgroundColor: view === 3 ? '#000000' : '' }}
            onClick={() => setView(3)}
            type="button"
            className="gamestore-btn-2"
          >
            WHITE SNOW EDITION
          </button>
        </div>

        {view === 1 && (
          <img
            src={img1}
            alt=""
          />
        )}
        {view === 2 && (
          <img
            src={img2}
            alt=""
          />
        )}

        {view === 3 && (
          <img
            src={img3}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default BuyNow;
