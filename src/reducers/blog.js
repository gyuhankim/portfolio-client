import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_ERROR,
  GET_ONE_POST_REQUEST,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_ERROR,
  SUBMIT_BLOG_POST_REQUEST,
  SUBMIT_BLOG_POST_SUCCESS,
  SUBMIT_BLOG_POST_ERROR,
  DELETE_BLOG_POST_REQUEST,
  DELETE_BLOG_POST_SUCCESS,
  DELETE_BLOG_POST_ERROR,
  SET_EDITING
} from '../actions/blog';

const initialState = {
  blog: [],
  currentPost: {},
  editing: false,
  loading: false,
  error: null
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {

    case GET_BLOG_REQUEST:
    return {
      ...state,
      loading: true
    }

    case GET_BLOG_SUCCESS:
    return {
      ...state,
      blog: action.blog,
      loading: false,
      error: null
    }

    case GET_BLOG_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case GET_ONE_POST_REQUEST:
    return {
      ...state,
      loading: true
    }

    case GET_ONE_POST_SUCCESS:
    return {
      ...state,
      currentPost: action.post,
      loading: false,
      error: null
    }

    case GET_ONE_POST_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case SUBMIT_BLOG_POST_REQUEST:
    return {
      ...state,
      loading: true
    }

    case SUBMIT_BLOG_POST_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null
    }

    case SUBMIT_BLOG_POST_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case DELETE_BLOG_POST_REQUEST:
    return {
      ...state,
      loading: true
    }

    case DELETE_BLOG_POST_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null
    }

    case DELETE_BLOG_POST_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    default:
    return state
  }
}