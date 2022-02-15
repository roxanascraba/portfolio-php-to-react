import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import contactIcon from '../images/contact_icon.png';

class ContactPage extends Component {
    state = { 
        pageName: 'contact',
        pageIcon: contactIcon
    }
    getPageIcon() {
        return (this.state.pageName === 'contact') ? this.state.pageIcon : homeIcon ;
    } 
    render() { 
        return (
            <div className="ContactPage">
                <section>
                    <article>
                    <img src={this.getPageIcon()} alt="Contact" title="Contact" width="50" height="50" />
                    <h1>Contact</h1>
                    </article>
                    <article>
                        <div>
                        {/* Contact page here */}
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
 
export default ContactPage;