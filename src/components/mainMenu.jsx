import React, { Component } from 'react';

class MainMenu extends Component {

    state = {
        items: [
            { id: 1, pageName: 'home', selected: true },
            { id: 2, pageName: 'about me', selected: false },
            { id: 3, pageName: 'projects', selected: false }, 
            { id: 4, pageName: 'contact', selected: false}
        ]
    };

    // constructor() {
    //    super();
    //    this.handleSelection = this.handleSelection.bind(this);
    // }

    render() { 
        console.log('main menu - rendered');
        return (
            <header className="App-header">
                <div id="portfolio_header">
                    <div id="name">
                        <a href="./index.html" id="top_name" style= {{ color:'black' }}>ROXANA SCRABA / FRONT-END DEVELOPER, WEB DESIGNER</a>
                    </div>
                    <nav>
                        <ul className="mainmenu">
                            { this.state.items.map(item => <li key={item.id}><a href={this.getPageURL(item.pageName)} className={this.getSelectedClass(item.pageName)} > { item.pageName.toUpperCase() } </a></li>)}
                        </ul>
                    </nav>
                    <div className="clear"></div>
                </div>
            </header>
        );
    };

    getPageURL(pageName) {
        let pageURL = 'index.html';
        if (pageName === 'about me') pageURL = 'about_me.html';
        else if (pageName === 'projects') pageURL ='projects.html';
        else if (pageName === 'contact') pageURL = 'contact.html'
        return pageURL; 
    }

    getSelectedClass(pageName) {
        let selectedCls = '';
        selectedCls += (pageName === 'home') ? 'selected' : ' ';
        return selectedCls;
    }

}
 
              /*
              <li><a href="index.html" class="selected">HOME</a></li>
              <li><a href="about_me.html" class="">ABOUT ME</a></li>
              <li><a href="projects.html" class="">PROJECTS</a></li>
              <li><a href="contact.html" class="">CONTACT</a></li>*/

export default MainMenu;