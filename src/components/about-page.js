import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AboutPage extends React.Component {

  randomizeBG(arr) {
    let random = Math.floor(Math.random() * Math.floor(arr.length));
    return arr[random];
  }

  render() {

    const bgs = [
      "https://i.pinimg.com/originals/20/86/b1/2086b1189cc058579c87b346d91bc808.gif",
      "https://i.pinimg.com/originals/50/04/a0/5004a023cb7bc6141ab85deb99a5ef4e.gif",
      "http://i.imgur.com/cgBiBUK.gif"
    ]

    return (
      <div className="about">
        <p> 
          Under construction, please check back later!!
        </p>
        <img src={this.randomizeBG(bgs)} alt="pixel art gif" />
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AboutPage);
