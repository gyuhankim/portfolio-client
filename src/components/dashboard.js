import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    componentDidMount() {
        // dashboard component just to show how to require user login to access a component
    }

    render() {
        return (
            <div />
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
