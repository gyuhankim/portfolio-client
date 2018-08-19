import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlog } from '../actions/blog';

export class BlogPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlog());
  }

  onClick() {
  }

  render() {
    
    return (
      <div className="blog">
        <Link to={this.props.loggedIn ? "/blog/new-post" : "/login"}>New Post</Link>
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    posts: state.blog.blog
});

export default connect(mapStateToProps)(BlogPage);
