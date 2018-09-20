import React from 'react';
import { connect } from 'react-redux';
import {hideModal} from '../actions/projects';

export class ProjectModal extends React.Component {

  render() {

    if (!this.props.modalHidden) {
      return (
        <div className="modal-container" onClick={() => this.props.dispatch(hideModal())}>
          <div className="project-modal">
            {this.props.project}
          </div>
        </div>
      )
    }
    
  }

}

const mapStateToProps = state => ({
  modalHidden: state.projects.modalHidden,
  project: state.projects.project
})

export default connect(mapStateToProps)(ProjectModal);