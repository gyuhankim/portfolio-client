import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/cubes.css';

import cubesHTML from '../index.html';

export class Cubes extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <cubesHTML />
      </div>
    );
  }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(Cubes);
