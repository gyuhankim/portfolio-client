import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

import '../styles/home-page.css';

export function LoginPage(props) {

  if (props.loggedIn) {
    return <Redirect to="/blog" />
  }

  return (
    <div className="home">
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
