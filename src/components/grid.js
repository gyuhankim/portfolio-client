import React from 'react';
import { connect } from 'react-redux';

import '../styles/grid-view.css';

export function Grid(props) {

  return (
    <div className="grid-view">
      {/* grid view component that serves as a container for card items (project cards, blog cards) */}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Grid);
