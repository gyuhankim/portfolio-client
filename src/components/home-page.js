import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export function HomePage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>

      <p>
        Test
      </p>

    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);
