import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import projectsIcon from '../images/my_projects_icon.png';

import ImageGallery from 'react-image-gallery';
import "../css/image-gallery.css";

import ecommerce1 from "../images/ecommerce_store_1.jpg";
import ecommerce2 from "../images/ecommerce_store_2.jpg";
import ecommerce3 from "../images/ecommerce_store_3.jpg";
import ecommerce4 from "../images/ecommerce_store_4.jpg";
import ecommerce5 from "../images/ecommerce_store_5.jpg";

import websites1 from "../images/websites_1.jpg";
import websites2 from "../images/websites_2.jpg";
import websites3 from "../images/websites_3.jpg";
import websites4 from "../images/websites_4.jpg";
import websites5 from "../images/websites_5.jpg";
import websites6 from "../images/websites_6.jpg";
import websites7 from "../images/websites_7.jpg";
import websites8 from "../images/websites_8.jpg";
import websites9 from "../images/websites_9.jpg";

import ebay1 from "../images/ebay_1.jpg";
import ebay2 from "../images/ebay_2.jpg";
import ebay3 from "../images/ebay_3.jpg";
import ebay4 from "../images/ebay_4.jpg";
import ebay5 from "../images/ebay_5.jpg";
import ebay6 from "../images/ebay_6.jpg";
import ebay7 from "../images/ebay_7.jpg";
import ebay8 from "../images/ebay_8.jpg";
import ebay9 from "../images/ebay_9.jpg";

import emails1 from "../images/emails_1.jpg";
import emails2 from "../images/emails_2.jpg";
import emails3 from "../images/emails_3.jpg";
import emails4 from "../images/emails_4.jpg";
import emails5 from "../images/emails_5.jpg";
import emails6 from "../images/emails_6.jpg";
import emails7 from "../images/emails_7.jpg";
import emails8 from "../images/emails_8.jpg";

import banners1 from "../images/banners_1.jpg";
import banners2 from "../images/banners_2.jpg";
import banners3 from "../images/banners_3.jpg";
import banners4 from "../images/banners_4.jpg";
import banners5 from "../images/banners_5.jpg";
import banners6 from "../images/banners_6.jpg";
import banners7 from "../images/banners_7.jpg";
import banners8 from "../images/banners_8.jpg";
import banners9 from "../images/banners_9.jpg";
import banners10 from "../images/banners_10.jpg";

import graphics1 from "../images/graphics_1.jpg";
import graphics2 from "../images/graphics_2.jpg";
import graphics3 from "../images/graphics_3.jpg";
import graphics4 from "../images/graphics_4.jpg";

import iphone1 from "../images/Barnebys_login.jpg"
import iphone2 from "../images/Barnebys_search.jpg"
import iphone3 from "../images/Barnebys_list.jpg"
import iphone4 from "../images/Barnebys_my_account.jpg"
import iphone5 from "../images/queue_mockup_iPhone_page1.jpg"
import iphone6 from "../images/queue_mockup_iPhone_page2.jpg"
import iphone7 from "../images/queue_mockup_iPhone_page3.jpg"

import welcome1 from "../images/welcome_1.jpg"
import welcome2 from "../images/welcome_2.jpg"
import welcome3 from "../images/welcome_3.jpg"

import prints1 from "../images/prints_1.jpg"
import prints2 from "../images/prints_2.jpg"
import prints3 from "../images/prints_3.jpg"
import prints4 from "../images/prints_4.jpg"
import prints5 from "../images/prints_5.jpg"
import prints6 from "../images/prints_6.jpg"
import prints7 from "../images/prints_7.jpg"
import prints8 from "../images/prints_8.jpg"
import prints9 from "../images/prints_9.jpg"
import prints10 from "../images/prints_10.jpg"

import paintings1 from "../images/paintings_1.jpg"
import paintings2 from "../images/paintings_2.jpg"
import paintings3 from "../images/paintings_3.jpg"
import paintings4 from "../images/paintings_4.jpg"
import paintings5 from "../images/paintings_5.jpg"
import paintings6 from "../images/paintings_6.jpg"
import paintings7 from "../images/paintings_7.jpg"
import paintings8 from "../images/paintings_8.jpg"
import paintings9 from "../images/paintings_9.jpg"
import paintings10 from "../images/paintings_10.jpg"

import photo1 from "../images/photography_1.jpg"
import photo2 from "../images/photography_2.jpg"
import photo3 from "../images/photography_3.jpg"
import photo4 from "../images/photography_4.jpg"
import photo5 from "../images/photography_5.jpg"

const gallery1 = [{original: ecommerce1},{original: ecommerce2},{original: ecommerce3},{original: ecommerce4},{original: ecommerce5}];
const gallery2 = [{original: websites1},{original: websites2},{original: websites3},{original: websites4},{original: websites5},{original: websites6},{original: websites7},{original: websites8},{original: websites9}];
const gallery3 = [{original: ebay1},{original: ebay2},{original: ebay3},{original: ebay4},{original: ebay5},{original: ebay6},{original: ebay7},{original: ebay8},{original: ebay9}];
const gallery4 = [{original: emails1},{original: emails2},{original: emails3},{original: emails4},{original: emails5},{original: emails6},{original: emails7},{original: emails8}];
const gallery5 = [{original: banners1},{original: banners2},{original: banners3},{original: banners4},{original: banners5},{original: banners6},{original: banners7},{original: banners8},{original: banners9},{original: banners10}];
const gallery6 = [{original: graphics1},{original: graphics2},{original: graphics3},{original: graphics4}];
const gallery7 = [{original: iphone1},{original: iphone2},{original: iphone3},{original: iphone4},{original: iphone5},{original: iphone6},{original: iphone7}];
const gallery8 = [{original: welcome1},{original: welcome2},{original: welcome3}];
const gallery9 = [{original: prints1},{original: prints2},{original: prints3},{original: prints4},{original: prints5},{original: prints6},{original: prints7},{original: prints8},{original: prints9},{original: prints10}];
const gallery10 = [{original: paintings1},{original: paintings2},{original: paintings3},{original: paintings4},{original: paintings5},{original: paintings6},{original: paintings7},{original: paintings8},{original: paintings9},{original: paintings10}];
const gallery11 = [{original: photo4},{original: photo1},{original: photo2},{original: photo3},{original: photo5}];

class ProjectsPage extends Component {
    state = { 
        pageName: 'projects',
        pageIcon: projectsIcon
    }
    getPageIcon() {
        return (this.state.pageName === 'projects') ? this.state.pageIcon : homeIcon ;
    } 
    
    render() { 
        return (
            <div className="ProjectsPage">
                <section>
                    <article>
                      <img src={this.getPageIcon()} alt="Projects" title="Projects" width="50" height="50" />
                      <h1>Projects</h1>
                    </article>
                    <article>
                      <div id="my_projects_list">
                        <h2>Advertisement banner, websites, ecommerce stores templates, graphics and icons</h2>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery1} />
                            </div>
                            <div className="projectText">
                              <h3>eCommerce stores templates</h3>
                              <p>Used Photoshop CS, CSS, HTML, PHP, JavaScript</p>
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className="projectText">
                              <h3>Company websites and blogs redesign</h3>
                              <p>Used Photoshop CS, CSS, HTML, PHP, JavaScript (jQuery)</p>
                            </div>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery2} />
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery3} />
                            </div>
                            <div className="projectText">
                              <h3>eBay templates</h3>
                              <p>Used Photoshop CS3 to create them</p>
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className="projectText">
                              <h3>Email templates / newsletters</h3>
                            </div>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery4} />
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery5} />
                            </div>
                            <div className="projectText">
                              <h3>Advertisement banners</h3>
                              <p> Created static and animated advertisement banners,
                              used on websites in different periods of the year: Cyber Monday, Black Friday,
                              Christmas, after Christmas, on Valentine's Day, on Mother's Day, Father's Day,
                              Labor Day, Memorial Day, Green Monday, Halloween, back to school period etc. </p>
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className="projectText">
                              <h3>Graphics &amp; Icons</h3>
                              <p>Shields, nice graphics, small icons and buttons used on the landing pages and front pages<br />
                              Used Photoshop CS3</p>
                            </div>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery6} />
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery7} />
                            </div>
                            <div className="projectText">
                              <h3>Designing and coding for small devices</h3>
                              <p>Used Photoshop CS3, CSS, HTML, JavaScript (jQuery) </p>
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className="projectText">
                              <h3>Designing and coding for TV </h3>
                              <p>Used Photoshop CS6, CSS, HTML, JavaScript (AngularJs, Handlebars) </p>
                            </div>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery8} />
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery9} />
                            </div>
                            <div className="projectText">
                              <h3>Ready for Print - "The joy of my colours"</h3>
                              <p>A personal brochure with some of my paintings</p>
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className="projectText">
                              <h3>My Paintings</h3>
                              <p> my official page from Konst.se: <br />
                               <a href="https://www.konst.se/roxanascraba" target="_blank" rel="noreferrer">www.konst.se/roxanascraba</a></p>
                            </div>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery10} />
                            </div>
                        </div>
                        <div className='projectListItem'>
                            <div className='projectImageGallery'>
                              <ImageGallery items={gallery11} />
                            </div>
                            <div className="projectText">
                              <h3>Photography</h3>
                              <p> - for my culinary blog: <a href="http://bunatatidinbucatarie.zuu.ro" target="_blank" rel="noreferrer" >http://bunatatidinbucatarie.zuu.ro</a></p>
                            </div>
                        </div>
                      </div>
                    </article>
                </section>
            </div>
        );
    }
}
 
export default ProjectsPage;