import React, { Component } from 'react';
import fbIcon from '../images/fb_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
// import gpIcon from '../images/gplus_icon.png';
import twitterIcon from '../images/twiter_icon.png';
import '../css/style.css';

class FooterMenu extends Component {
    
    state = {
        year: 2002,
        actualYear: this.getActualYear()
    };
    render() { 
        return (
        <footer>
            <div id="copyright">
                <span> &copy; {this.state.year} - {this.state.actualYear} Roxana Scraba &nbsp;|&nbsp; roxana.scraba@gmail.com </span>
                <br className="clear_left" />
            </div>
            <div id="social_links">
                <span>
                    <a href="http://www.facebook.com/roxana.scraba" target="_blank" rel="noreferrer"><img src={fbIcon} alt="Facebook" title="Facebook" width="30" height="30" /></a>
                    <a href="http://ro.linkedin.com/in/roxanascraba" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" title="LinkedIn" width="30" height="30" /></a>
                    <a href="http://www.twitter.com/roxanascraba" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter" title="Twitter" width="30" height="30" /></a>
                </span>
            </div>
        </footer>
        )
    }
    getActualYear() {
        const actualDate = new Date();
        return actualDate.getFullYear();
    }
}
 
export default FooterMenu;