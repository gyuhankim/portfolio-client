import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import ProjectModal from './project-modal';
import {showModal} from '../actions/projects';

import thumbnail1 from '../images/launchpad.png'
import thumbnail2 from '../images/ktss.png'
import thumbnail3 from '../images/s4ss.png'
import thumbnail4 from '../images/mainmenu.png'
import thumbnail5 from '../images/ptss.png'
import thumbnail6 from '../images/kpss.png'

import '../styles/projects-page.css';
import '../styles/modal.css';

export class ProjectsPage extends React.Component {

  render() {

    return (

        <div className="projects">

          {this.props.modalHidden ? null : <ProjectModal />}

          <div className="project" value="cubes" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail4} className="project-thumbnail" />
              Cubes
          </div>

          <div className="project" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail3} className="project-thumbnail" />
              s4
          </div>

          <div className="project" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail5} className="project-thumbnail" />
              Testing
          </div>

          <div className="project" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail2} className="project-thumbnail" />
              KNOW(tation)
          </div>

          <div className="project" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail1} className="project-thumbnail" />
              LaunchPad.gg
          </div>

          <div className="project" onClick={() => this.props.dispatch(showModal())}>
              <img src={thumbnail6} className="project-thumbnail" />
              Karpül
          </div>

        </div>

    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    modalHidden: state.projects.modalHidden
});

export default connect(mapStateToProps)(ProjectsPage);
