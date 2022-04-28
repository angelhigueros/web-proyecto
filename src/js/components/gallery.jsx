/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import img from '../../assets/img/gallery.png';
import gallery from '../../assets/img/gallerylist.png';

function Gallery() {
  const [view, setView] = useState(1);

  return (
    <div
      className="gallery-container"
      style={{ backgroundImage: `url(${img})` }}>
      <div className="gallery-list">
        <span className="world-title">GALLERY</span>
        <div className="gallery-buttons">
          <a
            onClick={() => setView(1)}
            style={{ border: view === 1 && '2px solid #fff' }}
            className="gallery-btn-1">
            Trailer
          </a>
          <a
            onClick={() => setView(2)}
            style={{ border: view === 2 && '2px solid #fff' }}
            className="gallery-btn-1">
            Screenshots
          </a>
          <a
            onClick={() => setView(3)}
            style={{ border: view === 3 && '2px solid #fff' }}
            className="gallery-btn-1">
            Concept Art
          </a>
          <a
            onClick={() => setView(4)}
            style={{ border: view === 4 && '2px solid #fff' }}
            className="gallery-btn-1">
            Cosplay
          </a>
        </div>

        {view === 1 && (
          <img
            src="https://fyre.cdn.sewest.net/nier-replicant/6179676b0af2d9001969437b/accolades-trailer-_Me9yLLGX.jpg"
            alt=""
          />
        )}
        {view === 2 && (
          <img
            src="https://fyre.cdn.sewest.net/nier-replicant/617966760af2d90019693a57/nierreplicant_07-mxcLaFTS7k.png"
            alt=""
          />
        )}

        {view === 3 && (
          <img
            src="https://fyre.cdn.sewest.net/nier-replicant/617966760af2d90019693a57/nier_replicantv1p2_pv_barrentemple_full-OHvashbvY.jpg"
            alt=""
          />
        )}

        {view === 4 && (
          <img
            src="https://fyre.cdn.sewest.net/nier-replicant/617966760af2d90019693a57/snow_cosplay_1920x1080_op_v7-f191hkZ_-.jpg"
            alt=""
          />
        )}

        <img src={gallery} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
