import React, { Component } from 'react';
import aboutMeIcon from './images/about_me_icon.png';  

import '../css/style.css';

import Header from './Header/Header';
import FooterMenu from './Footer/Footer';

class AboutMePage extends Component {
  state = {
    pageName: 'aboutMe',
    pageIcon: aboutMeIcon
  };

  render() {
    return (
    <div className="AboutMePage">
      <Header />
      <section>
        <article>
          <img src={this.state.pageIcon} alt="About Me" title="AboutMe" width="50" height="50" />          
        </article>
        <article>
          <div className='about_me_container'>
            <div className='about_me_text'>
              <h1>Hello!</h1>
              <h2>A bit about me:</h2>
              <div>
                <p>Beside web design, I love to travel, to paint, to cook and to take photos... a lot of photos. Can you believe I took 1682 pictures in a six days vacation in Turkey?</p>
                <p>I saw the 25th launch (and its final one to ISS) of the Endeavor space shuttle at NASA's Kennedy Space Center, Florida in 2010.</p>
                <p>I know a few Chinese words. One of my goals is to visit Great Wall and a shaolin monastery in China and to speak with a shaolin monk.</p>
                <p>One of my favorite quotes is: </p>
                <p><i>Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.</i> - Rabindranath Tagore</p>
              </div>
            </div>
            <div className='about_me_img'>
              {/* image here  */}
            </div>
          </div>
        </article>
      </section>
      <FooterMenu />
    </div>
    );
  }
}
export default AboutMePage;
