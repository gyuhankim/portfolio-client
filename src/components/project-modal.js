import React from 'react';
import {hideModal} from '../actions/projects';
import { connect } from 'react-redux';

export class ProjectModal extends React.Component {

  checkWhereClicked(component) {
    if (component === 'modal-container') {
      this.props.dispatch(hideModal());
    }
  }

  render() {

    if (!this.props.modalHidden) {

      switch(this.props.project) {

        case 'LaunchPad.gg':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">

              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div className="project-technology">
                <h3>Front-End Stack</h3>
                <p>React</p>
                <p>Redux</p>

                <h3>Back-End Stack</h3>
                <p>NodeJS</p>
                <p>MongoDB</p>

                <h3>Tech</h3>
                <a href="https://www.igdb.com/" target="_blank" rel="noopener noreferrer">IGDB API</a>
              </div>

              <div className="project-links">
                <a className="project-link" href="https://mysterious-sands-19667.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a className="project-link" href="https://github.com/gyuhankim/launchpad-client" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

            </div>
          </div>
        )

        case 'Karpül':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">


              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div className="project-technology">
                <h3>Front-End Stack</h3>
                <p>React</p>
                <p>Redux</p>

                <h3>Back-End Stack</h3>
                <p>NodeJS</p>
                <p>MongoDB</p>

                <h3>Tech</h3>
                <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer">Mapbox API</a> <br />
                <a href="https://cloudinary.com/" target="_blank" rel="noopener noreferrer">Cloudinary CDN</a>
              </div>

              <div className="project-links">
                <a className="project-link" href="http://karpul-client.surge.sh/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a className="project-link" href="https://github.com/thinkful-ei21/client-karpul" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

            </div>
          </div>
        )

        case 'CubesRedux':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">

              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <div className="youtube-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PW1Rd4iuDz8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="?"></iframe>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>Command a neon cube to avoid hitting other neon cubes. 
                If you hit another neon cube, you will explode into many neon cubes.
                Don't be many neon cubes... just be one neon cube.</p>
              </div>

              <div className="project-technology">
                <h3>Tech</h3>
                <p>Unity3D</p>
                <p>C#</p>
              </div>

            </div>
          </div>
        )

        case 'KNOW(tation)':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">

              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div className="project-technology">
                <h3>Front-End Stack</h3>
                <p>React</p>
                <p>Redux</p>

                <h3>Back-End Stack</h3>
                <p>NodeJS</p>
                <p>MongoDB</p>
              </div>

              <div className="project-links">
                <a className="project-link" href="https://mighty-anchorage-60704.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a className="project-link" href="https://github.com/thinkful-ei21/knowtation-client" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

            </div>
          </div>
        )

        case 's4':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">

              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div className="project-technology">
                <h3>Front-End Stack</h3>
                <p>React</p>
                <p>Redux</p>
              </div>

              <div className="project-links">
                <a className="project-link" href="https://intense-thicket-25944.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a className="project-link" href="https://github.com/gyuhankim/S4-screen-share-screen-saver" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

            </div>
          </div>
        )

        default:
        return null;
      }
      
    }
    
  }

}

const mapStateToProps = state => ({
  modalHidden: state.projects.modalHidden,
  project: state.projects.project
})

export default connect(mapStateToProps)(ProjectModal);