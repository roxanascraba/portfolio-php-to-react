import React, { Component } from 'react';
import homeIcon from '../images/home_icon.png';
import projectsIcon from '../images/my_projects_icon.png';

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
                        <div>
                            {/* Projects here */}
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
 
export default ProjectsPage;