import React from 'react';
import { connect } from 'react-redux';

import thumbnail from '../images/launchpad.png'

import '../styles/projects-page.css';

export class ProjectsPage extends React.Component {

  render() {

    return (
      <div className="projects">

        <div className="project">
          <a href="#" className="project-link" target="_blank">
            <img src={thumbnail} className="project-thumbnail" />
            Cubes
          </a>
        </div>

        <div className="project">
          <a href="https://intense-thicket-25944.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail} className="project-thumbnail" />
            s4
          </a>
        </div>

        <div className="project">
          <a href="#" className="project-link" target="_blank">
            <img src={thumbnail} className="project-thumbnail" />
            Testing
          </a>
        </div>

        <div className="project">
          <a href="https://mysterious-sands-19667.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail} className="project-thumbnail" />
            LaunchPad.gg
          </a>
        </div>

        <div className="project">
          <a href="https://mighty-anchorage-60704.herokuapp.com/" className="project-link" target="_blank">
            <img src={thumbnail} className="project-thumbnail" />
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
