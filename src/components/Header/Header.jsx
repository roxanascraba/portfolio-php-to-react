import React, { Component } from 'react';
import MainMenu from '../MainMenu/MainMenu';

import './header.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div id="portfolioHeader">
                <div id="name">
                    <a href="./index.html" id="top_name" style= {{ color:'black' }}>ROXANA SCRABA / FRONT-END DEVELOPER, WEB DESIGNER</a>
                </div>
                <nav id="mainNavigation">
                    <MainMenu />
                </nav>
                <div className="clear"></div>
            </div>
        );
    }
}
 
export default Header;