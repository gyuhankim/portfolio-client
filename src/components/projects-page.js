import React from 'react';
import { connect } from 'react-redux';

import thumbnail1 from '../images/launchpad.png'
import thumbnail2 from '../images/ktss.png'
import thumbnail3 from '../images/s4ss.png'
import thumbnail4 from '../images/mainmenu.png'
import thumbnail5 from '../images/ptss.png'

import '../styles/projects-page.css';

export class ProjectsPage extends React.Component {

  render() {

    return (
      <div className="projects">

        <div className="project">
          <a href="#" className="project-link" target="_blank">
            <img src={thumbnail4} className="project-thumbnail" />
            Cubes
          </a>
        </div>

        <div className="project">
          <a href="https://intense-thicket-25944.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail3} className="project-thumbnail" />
            s4
          </a>
        </div>

        <div className="project">
          <a href="#" className="project-link" target="_blank">
            <img src={thumbnail5} className="project-thumbnail" />
            Testing
          </a>
        </div>

        <div className="project">
          <a href="https://mysterious-sands-19667.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail1} className="project-thumbnail" />
            LaunchPad.gg
          </a>
        </div>

        <div className="project">
          <a href="https://mighty-anchorage-60704.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail2} className="project-thumbnail" />
            KNOW(tation)
          </a>
        </div>

      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ProjectsPage);
