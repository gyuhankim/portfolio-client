import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class ProjectsPage extends React.Component {

  render() {

    return (
      <div className="projects">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>



        <p>
          Grid format view of all projects.
          Decide how to approach separating the different project classes.
        </p>
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ProjectsPage);
