import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import f2 from '../../assets/img/f2.png';
import f3 from '../../assets/img/f3.png';
import f4 from '../../assets/img/f4.png';
import f5 from '../../assets/img/f5.png';
import f6 from '../../assets/img/f6.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-social">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
      <div className="footer-guidelines">
        <p>
          GUIDELINES RELATING TO DERIVATIVE WORK
          <br />
          GAMEPLAY VIDEO & LIVE STREAMING GUIDELINES
        </p>
      </div>
      <select>
        <option value="us">English (US)</option>
        <option value="ca">English (CA)</option>
        <option value="uk">English (UK)</option>
        <option value="...">...</option>
      </select>
      <img
        src="https://fyre.cdn.sewest.net/nier-replicant/611c7bf05346b200197741db/square-enix-djuvs2poi-dEpU0SSyX.svg"
        alt=""
      />
      <div className="footer-logos">
        <img src={f2} alt="" />
        <img src={f3} alt="" />
        <img src={f4} alt="" />
      </div>
      <div className="footer-logos-2">
        <img src={f5} alt="" />
        <img src={f6} alt="" />
      </div>
      <div className="footer-info">
        <p>
          © 2010, 2021 SQUARE ENIX CO., LTD. All Rights Reserved. Developed by
          Toylogic Inc. “PlayStation Family Mark”, “PlayStation” and PS4 are
          registered trademarks or trademarks of Sony Interactive Entertainment
          Inc., XBOX, XBOX ONE, The Games for Windows logo and Xbox logos are
          registered trademarks or trademarks of the Microsoft group of
          companies and are used under license. Steam and the Steam logo are
          trademarks and/or registered trademarks of Valve Corporation in the
          U.S. and/or other countries. All other marks are properties of their
          respective owners.
        </p>
      </div>
      <div className="footer-links">
        <span>Cookie Notice</span>
        <span>Term of Use</span>
        <span>Privacy Notice</span>
        <span>Support Centre</span>
        <span>Material Usage Policy</span>
      </div>
      <p>
        <strong>NieR Replicant ver.1.22474487139...</strong>
      </p>
    </div>
  );
}

export default Footer;
