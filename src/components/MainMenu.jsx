import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import '../css/style.css';

class MainMenu extends Component {

    state = {
        items: [
            { id: 1, pageName: 'home', selected: true },
            { id: 2, pageName: 'about', selected: false },
            { id: 3, pageName: 'abilities', selected: false }, 
            { id: 4, pageName: 'projects', selected: false }, 
            { id: 5, pageName: 'contact', selected: false}
        ]
    };

    getPageURL(pageName) {
        let pageURL = "/";
        if (pageName === 'about') pageURL = "/about"
        else if (pageName === 'projects') pageURL ="./projects"
        else if (pageName === 'contact') pageURL = "./contact"
        else if (pageName === 'abilities') pageURL = "./abilities"

        return pageURL; 
    }

    render() { 
        return (
            <ul className="mainmenu">
                { this.state.items.map(item => <li key={item.id}>
                    <NavLink className="" to={this.getPageURL(item.pageName)}>{ item.pageName.toUpperCase() } </NavLink>
                    </li>)}
            </ul>
        );
    };
}

export default MainMenu;