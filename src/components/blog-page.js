import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class BlogPage extends React.Component {

  render() {

    return (
      <div className="blog">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>


        <p>
          Grid format blog posts.
          Need to have a CMS here that's only accessible when logged in via button.
        </p>
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(BlogPage);
