import React, { Component } from 'react';
import MainMenu from './MainMenu';
import { NavLink } from "react-router-dom";

import '../css/style.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div id="portfolioHeader">
                <div id="name">
                    <NavLink className="" to="/">
                        <span id="top_name" style= {{ color:'black' }}>ROXANA SCRABA / FRONT-END DEVELOPER, WEB DESIGNER</span>
                    </NavLink>
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