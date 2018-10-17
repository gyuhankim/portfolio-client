import React from 'react';
import { connect } from 'react-redux';

import Unity, { UnityContent } from 'react-unity-webgl';

export class CubesRedux extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      '../WebGL_Build/Build/WebGL_Build.json',
      '../WebGL_Build/Build/UnityLoader.js'
    )
  }

  render() {
    
    return (
      <Unity unityContent={this.unityContent} />
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CubesRedux);
