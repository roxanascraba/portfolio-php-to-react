import React, { Component } from 'react';
import aboutIcon from '../images/about_me_icon.png'
import abilitiesIcon from '../images/my_abilities_icon.png';
import '../css/style.css';
import SearchBar from './SearchBar';

const  listItems = [
  'HTML','HTML5', 'html', 'html5',
  'CSS / CSS3 / css / css3', 'Sass / Sassy CSS / sass / scss / sassy ', 
  'responsive web design', 'Web design / design ',
  'JavaScript / javascript / js / JS / Vanilla JavaScript / jQuery', 
  'AngularJs / angularjs', 'PHP', 'XML', 'WordPress', 'Blogger',
  'Adobe Photoshop / adobe photoshop / adobe / Photoshop / photoshop', 
  'GIT / git', 'Mercurial', 'CVS / cvs', 'SVN / svn',
  'JIRA', 'MySQL / mysql'
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
          <div className='allAbilities'>
            <div className='allAbilities_left'>
              <h2 className="main_h1">Graphics and Design</h2>
              <p>Adobe Photoshop - advanced <br />
              Adobe Illustrator - average<br />
              Adobe InDesign - average<br />
              Adobe Dreamweaver - average<br />
              Actionscript - average<br />
              Inkscape - average</p><br />


              <h2 className="main_h1">Databases</h2>
              <p>MySQL - basic<br />
              ANSI SQL - basic</p>
              
              <h2 className="main_h1">OS &amp; Generic tools</h2>
              <p>Mac OSX - advanced <br />
              Microsoft Windows - advanced<br />
              Linux - average<br />
              CVS, Subversion, Mercurial, GIT</p>

            </div>
            <div className='allAbilities_right'>
              <h2 className="main_h1">Programming</h2>
              <p>HTML/XHTML/HTML5 - advanced<br />
              CSS/CSS3, Sass/Sassy Css/scss - advanced<br />
              JavaScript(Vanilla/jQuery, AngularJs) - advanced<br />
              PHP, PHP(Smarty) - advanced (Frontend implementation and modification)<br />
              XML - average (Implementation and modification knowledge)<br />
              Java, C, Visual Basic - basic (Implementation and modification knowledge)<br />
              WordPress,Blogger -  basic (Implementation and modification knowledge)</p><br />


              <h2 className="main_h1">Area of expertise</h2>
              <p>Web design, focusing mostly on usability<br />
              Responsive web design<br />
              Performance optimization, primarily load times
              </p>

                   
              <h2 className="main_h1">Productivity Apps</h2>
              <p>Microsoft Office - advanced<br />
              Redmine - advanced<br />
              Bugzilla - advanced<br />
              JIRA - advanced
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
    );
  }

}

export default Abilities;
