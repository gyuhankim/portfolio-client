import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Unity, { UnityContent } from 'react-unity-webgl';

import '../styles/cubes.css';

export class Cubes extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      // "../src/Build/WebGL_Build.json",
      // "../src/Build/UnityLoader.js"
      "./../src/Build/WebGL_Build.json",
      "./../src/Build/UnityLoader.js"
    );
  }

  render() {

    return (
      <Unity unityContent={this.unityContent} width="1280px" height="720px" />
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(Cubes);
