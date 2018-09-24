import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog, deleteBlogPost } from '../actions/blog';
import PixelArt from './pixel-art';

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
    let loadingScreen;
    
    if (this.props.posts) {
      posts = this.props.posts.map((post, index) => {
        return (
          <div className="blog-post" key={index}>
            <div className="post-title">{post.title}</div>
            <div className="post-date">{post.createdAt} <span className="post-updated-date">{post.updatedAt ? post.updatedAt : null}</span></div>
            <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}} />
            {this.props.loggedIn ? <div><button className="delete-button" value={post.id} onClick={e => this.onDelete(e.target.value)}>Delete</button></div> : null}
            <div className="post-spacer" />
          </div>
        )
      })
    }

    if (this.props.posts.length == 0) {
      loadingScreen = 
        <div>
          <p className="blog-loading-1">The blog server is starting up...</p>
          <p className="blog-loading-2">This may take up to 30 seconds...</p>
          <PixelArt />
        </div>
    }

    return (
      <div className="blog">

        <Link to={this.props.loggedIn ? "/blog/new-post" : "/login"} className="new-post-link">New Post</Link>      
        
        {loadingScreen}

        <div className="posts-container">
          {posts}
        </div>

      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    posts: state.blog.blog,
    loading: state.blog.loading
});

export default connect(mapStateToProps)(BlogPage);
