import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import logoDesignRoxanaScraba from '../images/logo_design_roxana_scraba.png';
import arrowImage from '../images/arrow.png';

import '../css/style.css';

import Header from './Header/Header';
import FooterMenu from './Footer/Footer';
import SearchBar from './SearchBar/SearchBar';

const  listItems = [
  'HTML','HTML5', 
  'CSS','CSS3', 'Sass', 'scss',
  'JavaScript', 'Vanilla JavaScript', 'jQuery', 'Angular',
  'PHP', 'XML', 'WordPress', 'Blogger',
  'Adobe Photoshop', 'Web design','GIT', 'JIRA',
  'adobe','Photoshop', 'adobe photoshop', 'git', 'Mercurial', 'CVS', 'cvn'
];

class HomePage extends Component {
  state = {
    pageName: 'home',
    pageIcon: homeIcon
  };

  constructor(props) {
    super(props);
    //console.log('App - constructor', this.props);
    //this.state = this.props;
  };

  componentDidMount() {
    // ajax call 
    //console.log('App - Mounted');
  };

  render() {
    //console.log("App - rendered");

    return (
    <div className="HomePage">
      <Header />
      <section>
        <article>
          <img src={this.getPageIcon()} alt="Home" title="Home" width="50" height="50" />
          <SearchBar listItems={listItems}/>

          <div id="my_logo">
            <a href="./about_me.php"><img src={logoDesignRoxanaScraba} alt="Roxana Scraba" title="Roxana Scraba" width="379" height="346" /></a>
          </div>
        </article>
        <article>
          <div id="design_info">
            <p>DESIGN <img src={arrowImage} alt="-->" title="-->" width="30" height="30" /> SIMPLE & CREATIVE</p>
          </div>
        </article>
      </section>
      <FooterMenu />
    </div>
    );
  }

  getPageIcon() {
    return (this.state.pageName === 'home') ? homeIcon : this.state.pageIcon;
  }

}

export default HomePage;
