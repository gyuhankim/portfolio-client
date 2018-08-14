import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AboutPage extends React.Component {

  render() {

    return (
      <div className="about">
        <p> 
          Need a head shot.
          Short Summary and 3 column layout for skills.
        </p>
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AboutPage);
