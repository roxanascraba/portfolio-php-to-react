import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import projectsIcon from '../images/my_projects_icon.png';

import ImageGallery from 'react-image-gallery';
import "../css/image-gallery.css";

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
import photo1 from "../images/photography_1.jpg"
import photo2 from "../images/photography_2.jpg"
import photo3 from "../images/photography_3.jpg"
import photo4 from "../images/photography_4.jpg"
import photo5 from "../images/photography_5.jpg"

const gallery1 = 
    [
      {
        original: 'https://lh5.googleusercontent.com/-63xz8cNG8nI/UGjEZqNCWpI/AAAAAAAAlsY/VG_WQ8-EufA/s640/template_store_6.jpg',
      },{
        original: 'https://lh5.googleusercontent.com/-FnNAFu762hw/UGjEp_N5c0I/AAAAAAAAlsg/PBepshNutTk/s640/template_store_7.jpg',
      },{
        original: 'https://lh6.googleusercontent.com/-Md87upGlH-I/UGjFOb7AzBI/AAAAAAAAlso/P7Xrp-iKh00/s640/template_store_8.jpg',
      },{
        original: 'https://lh3.googleusercontent.com/-Fn73ZzbePGs/UGjHloOcYKI/AAAAAAAAlsw/M6o2AXoAlzc/s720/pear_sunglasses.jpg',
      },{
        original: 'https://lh5.googleusercontent.com/-KgUgqQq_xo0/UGjIhcYPhPI/AAAAAAAAls4/ZG2y3HrgDL4/s800/template_store_4.jpg',
      }
    ];
const gallery2 =
    [
      {
        original: 'https://lh3.googleusercontent.com/-FXme_pZ1PrM/UGjXwIOCvpI/AAAAAAAAlwM/dZUGtOaTxRo/s640/index_Vendio_5.jpg',
      },{
        original: "https://lh5.googleusercontent.com/-s1KNd55_kpQ/UGl5VDJ_EMI/AAAAAAAAlzw/cnPvbwcP4Zc/s640/index_Vendio_6.3.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-WkQ1CLTQkmg/UGl5Kcscu4I/AAAAAAAAlzo/REviaUF2RAE/s640/index_Vendio_3.jpg"
      },{
        original: 'https://lh6.googleusercontent.com/-Nf8TYNfR9mI/UGl3kK-ESVI/AAAAAAAAlzY/KDunoznhqQg/s640/vendio_ro.jpg',
      },{
        original: "https://lh6.googleusercontent.com/-DhLW3rlidAA/UGl48dYjQ2I/AAAAAAAAlzg/96H9ECtesBo/s800/vendio_ro_echipa_v3.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-StJ35Y5TyzM/UGm57t7v2eI/AAAAAAAAl5E/H5ntLO178Zk/s912/websites_zuu.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-WTr2sdNY1TM/UGm58ZKAvSI/AAAAAAAAl5M/0hpA_qk4ESg/s912/websites_ferma.jpg"
      },{
        original: "https://lh5.googleusercontent.com/-6S0bquI7S_0/UGm584fQbJI/AAAAAAAAl5Q/9kPUJd0zP74/s912/websites_deco.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-VfcXub0HzEo/UGl55EDy3AI/AAAAAAAAlz4/CyduZv52fbk/s912/bunatati_ps.jpg"
      }
    ];
const gallery3 =
    [
      {
        original: "https://lh6.googleusercontent.com/-__eXUIsTGKo/UGjqhHcFcfI/AAAAAAAAlyM/tLvr8qMtTNw/s720/template_wildflowers_Vendio.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-WmrGmXSh6mc/UGjqxX-YYtI/AAAAAAAAlyU/_QKmQOuU6Oc/s720/template_floral.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-f8tHer0iXgQ/UGjqyjD4BiI/AAAAAAAAlyc/b2UI3PP7_5s/s720/template_fall.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-rnriUMaciaE/UGjq7XVIJAI/AAAAAAAAlyk/Sx6we89jLcc/s720/halloween_scary.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-bWCfkRjoeXg/UGjrA1jHVOI/AAAAAAAAlys/ZybuWpRTquA/s720/fruits_celebration.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-5ClzdqSJcT4/UGjrEYSFc5I/AAAAAAAAly0/S0xvgFWcUq4/s720/template_grass.jpg"
      },{
        original: "https://lh5.googleusercontent.com/-dK2LBfHJyeQ/UGjrJXfrtoI/AAAAAAAAly8/22kR8K5LkxM/s720/template_back_to_school.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-UOZUlWZR04U/UGjrzHt7K_I/AAAAAAAAlzE/75ld1puzg98/s640/showcase_ebay_template_2.jpg"
      },{
        original: "https://lh5.googleusercontent.com/-REWOOpDqI_g/UGjr2FNs55I/AAAAAAAAlzM/lOEQSCeiRZ8/s640/showcase_ebay_template_4.jpg"
      }
    ];
const gallery4 =
    [
      {
        original: "https://lh5.googleusercontent.com/-PUuMkKpKduY/UGjVfIb0BTI/AAAAAAAAlvQ/0UFy4PjS4PA/s720/email_template_10.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-UnL8q5x9oBg/UGjVZ5cQABI/AAAAAAAAlvI/gqKW04MjW1U/s800/email_template_1.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-OyVJdL3QO0Q/UGjViw2mkcI/AAAAAAAAlvY/ePf7Ox_OvH8/s720/email_template_2.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-Dh4e6wPM4cM/UGjVn5FaswI/AAAAAAAAlvo/V3oAjJwWMk0/s933/email_template_4.jpg"
      },{
        original: "https://lh5.googleusercontent.com/-F_RWDZoUYDY/UGjVlgQ2elI/AAAAAAAAlvg/Bv1Kiwr4h98/s912/email_template_3.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-zocLU5igMEM/UGjVw4Wi08I/AAAAAAAAlvw/8OqsrVVlCjI/s933/email_template_7.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-76n7Uz9NRto/UGjV1wNiW3I/AAAAAAAAlv4/2VtJMQ2sOhM/s720/email_template_9.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-X1nkvbBU0KI/UGjV3SLpfdI/AAAAAAAAlwA/VZE-xIm_7cI/s640/email_template_8.jpg"
      }
    ];
const gallery5 =
    [
      {
        original: "https://lh6.googleusercontent.com/-xtYrWRKuWfQ/UGjOVNaJSXI/AAAAAAAAlto/GB6PTtxY8m4/s512/new_fathers_day_grads_page.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-yxRp8LrGPOY/UGjOGUcYRbI/AAAAAAAAltY/g-qsvvPC_eE/s450/mothers_day_home-banner.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-Etp5TqiT_K0/UGjL3x8EY_I/AAAAAAAAltI/ZRnStXH4v3w/s600/after-christmas-homepage_2011_v3.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-ZOanfuHOuTk/UGjOCcVwZpI/AAAAAAAAltQ/RbfUho7mnrw/s600/mothers_day_home-banner_2.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-dayNcad71xo/UGjOR9HMoyI/AAAAAAAAltg/fCSPXB8Y6Fs/s616/fathers_day_gift_ideas.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-n3gAiP-ymaM/UGjOfX50t4I/AAAAAAAAltw/MILCXgx-MHM/s600/fathers_day_home_banner_v1.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-B3yliZxPPQc/UGjOsXQ2WDI/AAAAAAAAlt4/b29D-bMASe0/s580/blackfriday-newsletter_2.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-No_kioCrEiE/UGjOzmVBiWI/AAAAAAAAluA/QTbwysKHiNA/s600/after-christmas-homepage_2011_v1.jpg"
      },{
        original: "https://lh3.googleusercontent.com/-hfH8PEojYfU/UGjO4NO-8EI/AAAAAAAAluI/K2Z0zMkN3HI/s600/after-christmas-homepage_2011_v2.jpg"
      },{
        original: "https://lh5.googleusercontent.com/-yFBZ-8rmB_U/UGjPAe6TcjI/AAAAAAAAluQ/8QFq4D0bH2A/s600/after-christmas_2011_part2_v3.jpg"
      }
      // ,{
      //   original: "https://lh3.googleusercontent.com/--ALgYX1x4Tk/UGjPCqSULbI/AAAAAAAAluY/LAlcak5IUc8/s600/after-christmas_2011_part2_v2.jpg"
      // },{
      //   original: "https://lh3.googleusercontent.com/-Y8qNs2zHzs0/UGjPEoHwh2I/AAAAAAAAlug/lU6sTGFymQQ/s600/after-christmas_2011_part2_v1.jpg"
      // },{
      //   original: "https://lh5.googleusercontent.com/-vpQSjuqWScI/UGjPIN6AIII/AAAAAAAAluo/FqnYv7P2ON4/s600/after-christmas_2011_part2_v5.jpg"
      // },{
      //   original: "https://lh5.googleusercontent.com/--BKw477uyNE/UGjPQln2fEI/AAAAAAAAluw/jatibxQuDOU/s600/after-christmas_2011_part2_v6.jpg"
      // },{
      //   original: "https://lh6.googleusercontent.com/-bkFMe50_v30/UGmJPV6XV_I/AAAAAAAAl0E/MH5Eh_aeHW0/s600/memorial_day_banner.jpg"
      // },{
      //   original: "https://lh3.googleusercontent.com/-WgLMDiFuR-M/UGmKlzM-jAI/AAAAAAAAl0M/8Dep7_jr0B4/s600/memorial_day_banner_v1.jpg"
      // },{
      //   original: "https://lh3.googleusercontent.com/-WmhSwvdoJ1s/UGmLBJ4hqSI/AAAAAAAAl0U/0IE9kymgJek/s600/memorial_day_banner_v4.jpg"
      // },{
      //   original: "https://lh6.googleusercontent.com/-A2d2bTQkgTc/UGmLOu0OadI/AAAAAAAAl0c/z-INctGgdrA/s600/back-to-school-homepage_v2.2.jpg"
      // },{
      //   original: "https://lh4.googleusercontent.com/-bEpO5OgHms0/UGmLn3lr5zI/AAAAAAAAl0o/gEzs5Luomws/s600/green-monday-homepage_v4.jpg"
      // },{
      //   original: "https://lh3.googleusercontent.com/-dW7qUMx6CC4/UGmLoZOQZLI/AAAAAAAAl0w/1Gk4Vp8iO3A/s600/green-monday-homepage_v3.jpg"
      // },{
      //   original: "https://lh3.googleusercontent.com/-L7cb3M9PWyU/UGmLpChZXFI/AAAAAAAAl00/CINbq4p2wl0/s600/cyber-monday-homepage.jpg"
      // },{
      //   original: "https://lh4.googleusercontent.com/-cyPBt3PK1zc/UGmMeZZddpI/AAAAAAAAl08/edOOU7rq_58/s580/labor-day-banner_142x580.jpg"
      // },{
      //   original: "https://lh4.googleusercontent.com/-5ioSa9tWjOM/UGmOb0uTWPI/AAAAAAAAl1c/ZJNtTL5zhwc/s300/banner_amazon_v2_movement_v2.jpg"
      // },{
      //   original: "https://lh6.googleusercontent.com/-9FDYDHGrPGg/UGmOlibKMhI/AAAAAAAAl1s/9sxsv91qL7Q/s300/banner_multi-channel_v5_5_growth.jpg"
      // },{
      //   original: "https://lh6.googleusercontent.com/-Fg9MuE0o1cs/UGjPtJlNn5I/AAAAAAAAlu4/JMnNKCNUucE/s580/tax-header_.jpg"
      // }
    ];
const gallery6 =
    [
      {
        original: "https://lh6.googleusercontent.com/-mqm2G2YuFPM/UGjakkxTlOI/AAAAAAAAlwg/UCMX1KRFFCI/s500/shield.jpg"
      },{
        original: "https://lh4.googleusercontent.com/-wyRAYcoGRD4/UGmQJbiBPII/AAAAAAAAl2I/XVUTSFlYMGY/s800/image_hosting_lp_blue_bgd.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-jUB1osLYYpc/UGmVVLyUBAI/AAAAAAAAl3c/K46oMYCfV8M/s174/graphics_icons.jpg"
      },{
        original: "https://lh6.googleusercontent.com/-XXo8kS4Cgzc/UGmRF8BRFeI/AAAAAAAAl2U/IfjE9wxtWXg/s1222/vendio_icons.jpg"
      }
    ];
const gallery7 =
    [
      {
        original: iphone1
      },{
        original: iphone2
      },{
        original: iphone3
      },{
        original: iphone4
      },{
        original: iphone5
      },{
        original: iphone6
      },{
        original: iphone7
      }
    ];
const gallery8 =
    [
      {
        original: welcome1
      },{
        original: welcome2
      },{
        original: welcome3
      }
    ];
const gallery9 =
    [
      {
        original: "https://lh5.googleusercontent.com/-szEG32fFG0M/UGmlrBoXQ2I/AAAAAAAAl3w/DyUZgBd3Ei4/s640/P1170133.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-czoFuL11nuQ/UGmlr5O8eyI/AAAAAAAAl34/Po2GxsK0qa8/s640/P1170137.JPG"
      },{
        original: "https://lh4.googleusercontent.com/-OlR9ItM6gCk/UGmlsTkxsVI/AAAAAAAAl4A/QijZSGtBlhg/s640/P1170140.JPG"
      },{
        original: "https://lh4.googleusercontent.com/-dediHAU9nj4/UGmltBzi6DI/AAAAAAAAl4I/Krg3wmXxWsg/s640/P1170141.JPG"
      },{
        original: "https://lh3.googleusercontent.com/-BvTyL8fDNqs/UGmltlpjbqI/AAAAAAAAl4Q/oOCPsqYXs40/s640/P1170142.JPG"
      },{
        original: "https://lh3.googleusercontent.com/-qRrxZgY0VjY/UGmluXV4TtI/AAAAAAAAl4Y/3ZByQfUR5FI/s640/P1170143.JPG"
      },{
        original: "https://lh3.googleusercontent.com/-4H-PFwiOIA0/UGmluwsGP1I/AAAAAAAAl4g/06LTTy9_nwM/s640/P1170144.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-H21mj9MD74c/UGmlvtHJyDI/AAAAAAAAl4o/JcUi8N_qkv8/s640/P1170146.JPG"
      },{
        original: "https://lh4.googleusercontent.com/-YPqhRqC_wpM/UGmlwFqqNNI/AAAAAAAAl4w/56fbqVMko50/s640/P1170147.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-7yDMrJSr_Es/UGi5JARQbGI/AAAAAAAAlsE/RYnb--I-eWQ/s640/P1170087.JPG"
      }
    ];
const gallery10 =
    [
      {
        original: "https://lh5.googleusercontent.com/-9x1bPeEaXM8/UGi1qTGXZNI/AAAAAAAAloQ/Gb_qb3joDXs/s640/P1170090.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-3pU_Zr8obms/UGi15vdKlGI/AAAAAAAAlrQ/t-1_YpI55dQ/s640/P1170116.JPG"
      },{
        original: "https://lh3.googleusercontent.com/-p4eNf21V7sA/UGi1pd8hCnI/AAAAAAAAloI/HYGhskbBnRE/s640/P1170089.JPG"
      },{
        original: "https://lh4.googleusercontent.com/-R8STPo0XKDc/UGi13nS5BNI/AAAAAAAAlqw/BHbD-XhG_sI/s640/P1170112.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-XR3J5hGNIRQ/UGi14JmILbI/AAAAAAAAlq4/X6KFtKowEvo/s640/P1170113.JPG"
      },{
        original: "https://lh6.googleusercontent.com/-BAzJAyF6JVY/UGi14lejs8I/AAAAAAAAlrA/7N8HCmqyACY/s640/P1170114.JPG"
      },{
        original: "https://lh3.googleusercontent.com/-Z8as2WlfdVw/UGi15K5S9cI/AAAAAAAAlrI/ELQ2rxhreJw/s640/P1170115.JPG"
      },{
        original: "https://lh4.googleusercontent.com/-rIdEe129T3I/UGi1okx1lMI/AAAAAAAAln8/ur3GVZ1fn6Y/s640/P1170088.JPG"
      },{
        original: "https://lh6.googleusercontent.com/-zxV0Bg6_GCo/UGi1wBphdnI/AAAAAAAAlpY/nIV4kDLTK5Q/s640/P1170101.JPG"
      },{
        original: "https://lh5.googleusercontent.com/-ZsHTb_7RDjg/UGi16JzULII/AAAAAAAAlrU/ve9cNcVIVug/s640/P1170117.JPG"
      }
    ];
const gallery11 =
    [
      {
        original: photo4
      },{
        original: photo1
      },{
        original: photo2
      },{
        original: photo3
      },{
        original: photo5
      }
    ];

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