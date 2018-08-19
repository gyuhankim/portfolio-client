import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import BlogForm from './blog-form';
import TagForm from './tag-form';

import '../styles/new-post-page.css';

export function NewPost(props) {

  if (!props.loggedIn) {
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

      <div className="tag-form-container">
        <p>
          Create A Tag
        </p>
        <TagForm />
      </div>

      <Link to="/blog">Back</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewPost);
