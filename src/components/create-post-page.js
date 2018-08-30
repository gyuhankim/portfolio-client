import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import BlogForm from './blog-form';

import '../styles/new-post-page.css';

export class NewPost extends React.Component {

  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/blog" />
    }

    return (
      <div className="create-new-post">
  
        <div className="blog-form=container">
          <p>
            Create New Post
          </p>
          <BlogForm />
        </div>
  
        <div className="spacer">
        </div>
  
        <Link to="/blog">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  tags: state.tag
});

export default connect(mapStateToProps)(NewPost);
