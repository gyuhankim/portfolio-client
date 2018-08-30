import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog, deleteBlogPost } from '../actions/blog';

import '../styles/blog.css';

export class BlogPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlog());
  }

  onDelete(id) {
    this.props.dispatch(deleteBlogPost(id));
    this.props.dispatch(getBlog());
  }

  render() {
    let posts;
    
    if (this.props.posts) {
      posts = this.props.posts.map((post, index) => {
        return (
          <div className="blog-post" key={index}>
            <div>{post.createdAt}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            {this.props.loggedIn ? <button value={post.id} onClick={e => this.onDelete(e.target.value)}>Delete</button> : null}
          </div>
        )
      })
    }

    return (
      <div className="blog">

        <Link to={this.props.loggedIn ? "/blog/new-post" : "/login"}>New Post</Link>

        {posts}

      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    posts: state.blog.blog
});

export default connect(mapStateToProps)(BlogPage);
