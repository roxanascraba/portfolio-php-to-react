import React, { Component } from 'react';
import aboutIcon from '../images/about_me_icon.png'
import abilitiesIcon from '../images/my_abilities_icon.png';
import '../css/style.css';
import SearchBar from './SearchBar';

const  listItems = [
  'HTML','HTML5', 'html', 'html5',
  'CSS','CSS3', 'css', 'css3', 'Sass', 'scss', 'sass', 'sassy', 'Sassy CSS', 'responsive web design',
  'js', 'JavaScript', 'javascript', 'Vanilla JavaScript', 'JS', 'jQuery', 'Angular',
  'PHP', 'XML', 'WordPress', 'Blogger',
  'Adobe Photoshop', 'Web design','GIT', 'JIRA',
  'adobe','Photoshop', 'adobe photoshop', 'git', 'Mercurial', 'CVS', 'cvn'
];

class Abilities extends Component {
  state = {
    pageName: 'abilities',
    pageIcon: abilitiesIcon
  };

  getPageIcon() {
    return (this.state.pageName === 'abilities') ? this.state.pageIcon : aboutIcon;
  }

  render() {
    return (
    <div className="AbilitiesPage">
      <section>
        <article>
          <img src={this.getPageIcon()} alt="Abilities" title="Abilities" width="50" height="50" />
          <h1>Abilities</h1>
          <SearchBar listItems={listItems} />
        </article>
        <article>
          <div>
            {/* Abilities table here */}
          </div>
        </article>
      </section>
    </div>
    );
  }

}

export default Abilities;
