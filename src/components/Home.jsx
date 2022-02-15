import React from 'react';
import { NavLink } from "react-router-dom";
import homeIcon from '../images/home_icon.png';
import logoDesignRoxanaScraba from '../images/logo_design_roxana_scraba.png';
import arrowImage from '../images/arrow.png';

import '../css/style.css';

function Home() {
  return (
  <div className="HomePage">
    <section>
      <article>
        <img src={homeIcon} alt="Home" title="Home" width="50" height="50" />

        <div id="my_logo">
          <NavLink className="" to="/about">
            <img src={logoDesignRoxanaScraba} alt="Roxana Scraba" title="Roxana Scraba" width="379" height="346" />
          </NavLink>
        </div>
      </article>
      <article>
        <div id="design_info">
          <p>DESIGN <img src={arrowImage} alt="-->" title="-->" width="30" height="30" /> SIMPLE & CREATIVE</p>
        </div>
      </article>
    </section>
  </div>
  );
}

export default Home;