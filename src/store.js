import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import {reducer as formReducer} from 'redux-form';
import blogReducer from './reducers/blog';
import authReducer from './reducers/auth';
import projectsReducer from './reducers/projects';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        blog: blogReducer,
        projects: projectsReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
