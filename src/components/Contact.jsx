import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import contactIcon from '../images/contact_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
import facebookIcon from '../images/fb_icon.png';
import twitterIcon from '../images/twiter_icon.png';
import roxanaPic from '../images/roxana_picture.jpg';

class ContactPage extends Component {
    state = { 
        pageName: 'contact',
        pageIcon: contactIcon
    }
    getPageIcon() {
        return (this.state.pageName === 'contact') ? this.state.pageIcon : homeIcon ;
    } 
    render() { 
        return (
            <div className="ContactPage">
                <section>
                    <article>
                    <img src={this.getPageIcon()} alt="Contact" title="Contact" width="50" height="50" />
                    <h1>Contact</h1>
                    </article>
                    <article>
                    <div className='contact_container'>
                        <div className='contact_text'>
                            <h3>Roxana Scraba</h3>
                            <p> Stockholm, Sweeden<br />
                            roxana.scraba@gmail.com</p>
                            <div className='follow'>
                                <p className='follow_me'><a href="http://ro.linkedin.com/in/roxanascraba" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" title="LinkedIn" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on LinkedIn</span></p>
                                <p className='follow_me'><a href="http://www.facebook.com/roxana.scraba" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="Facebook" title="Facebook" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on Facebook</span></p>
                                <p className='follow_me'><a href="http://www.twitter.com/roxanascraba" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter" title="Twitter" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on Twitter</span></p>
                            </div>
                        </div>
                        <div className='contact_img'>
                            <img src={roxanaPic} alt="Roxana Scraba" title="Roxana Scraba" width="375" height="380" />
                        </div>
                    </div>                                        
                    </article>
                </section>
            </div>
        );
    }
}
 
export default ContactPage;