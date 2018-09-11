import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import BlogForm from './blog-form';
import { getOnePost } from '../actions/blog';

import '../styles/new-post-page.css';

export class NewPost extends React.Component {

  componentDidMount() {
    this.props.dispatch(getOnePost(this.props.match.params.post));
    if (this.props.post) {
      console.log(this.props.post);
    }
  }

  render() {

    if (!this.props.loggedIn) {
      return <Redirect to="/blog" />
    }

    return (
      <div className="create-new-post">
  
        <div className="blog-form=container">
          <p>
            Edit Post
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
  post: state.blog.currentPost
});

export default connect(mapStateToProps)(NewPost);
