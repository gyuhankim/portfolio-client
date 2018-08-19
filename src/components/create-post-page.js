import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import BlogForm from './blog-form';

export function NewPost() {

  return (
    <div className="home">
      <BlogForm />
      <Link to="/blog">Back</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewPost);
