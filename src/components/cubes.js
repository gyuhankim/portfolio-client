import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";

import '../styles/cubes.css';

export class Cubes extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent (
      "Build/WebGL_Build.json",
      "Build/UnityLoader.js"
    );

  }

  render() {

    return (
      <Unity unityContent={this.unityContent} height="720px" width="1280px" />
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(Cubes);
