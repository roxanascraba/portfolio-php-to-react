import React, { Component } from 'react';
import aboutMeIcon from '../images/about_me_icon.png';  
import quote from '../images/quote.png';
import roxanaPic from '../images/roxana_picture.jpg';

import '../css/style.css';

class AboutPage extends Component {
  state = {
    pageName: 'about_me',
    pageIcon: aboutMeIcon
  };

  render() {
    return (
    <div className="AboutMePage">
      <section>
        <article>
          <img src={this.state.pageIcon} alt="About Me" title="AboutMe" width="50" height="50" />          
        </article>
        <article>
          <div className='about_container'>
            <div className='about_me_text'>
              <h1>Hello!</h1>
              <h2>A bit about me:</h2>
              <div>
                <p>Beside web design, I love to travel, to paint, to cook and to take photos... a lot of photos. Can you believe I took 1682 pictures in a six days vacation in Turkey?</p>
                <p>I saw the 25th launch (and its final one to ISS) of the Endeavor space shuttle at NASA's Kennedy Space Center, Florida in 2010.</p>
                <p>I know a few Chinese words. One of my goals is to visit Great Wall and a shaolin monastery in China and to speak with a shaolin monk.</p>
                <p>One of my favorite quotes is: </p>
                <div className='quote_block'>
                  <div className='quote_img'><img src={quote} width="50" height="45" alt="quote" /></div>
                  <div className='quote_text_author'>
                    <div className='quote_text'>Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.</div>
                    <div className='quote_author'>- Rabindranath Tagore</div>
                  </div> 
                </div>
              </div>
            </div>
            <div className='about_me_img'>
              <img src={roxanaPic} alt="Roxana Scraba" title="Roxana Scraba" width="375" height="380" />
            </div>
          </div>
        </article>
      </section>
    </div>
    );
  }
}
export default AboutPage;
