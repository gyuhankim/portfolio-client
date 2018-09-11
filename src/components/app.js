import React from 'react';
import {connect} from 'react-redux';
import {Link, Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import HomePage from './home-page';
import AboutPage from './about-page';
import ProjectsPage from './projects-page';
import BlogPage from './blog-page';
import NewPost from './create-post-page';
import LoginPage from './login-page';
import EditPostPage from './edit-post-page';

import {refreshAuthToken} from '../actions/auth';

import '../styles/app.css';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/blog/new-post" component={NewPost} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="/blog/edit-post/:post" component={EditPostPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
