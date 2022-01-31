import React, { Component } from 'react';
import aboutMeIcon from './images/about_me_icon.png';

import MainMenu from './mainMenu';
import FooterMenu from './footer';
import './css/App.css';
import './css/style.css';

class AboutMePage extends Component {
  state = {
    pageName: 'aboutMe',
    pageIcon: aboutMeIcon
  };

  render() {
    return (
    <div className="AboutMePage">
      <MainMenu />
      <section>
        <article>
          <img src={this.getPageIcon} alt="About Me" title="AboutMe" width="50" height="50" />          
        </article>
        <article>
          
        </article>
      </section>
      <FooterMenu />
    </div>
    );
  }

  getPageIcon() {
    return this.state.pageIcon;
  }

}

export default AboutMePage;
