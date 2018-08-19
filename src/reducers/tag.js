import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
  NEW_TAG_SUCCESS,
  NEW_TAG_ERROR
} from '../actions/tag';

const initialState = {
  tags: [],
  tagFilter: '',
  loading: false,
  error: null
};

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS_REQUEST:
    return {
      ...state,
      loading: true
    }

    case GET_TAGS_SUCCESS:
    return {
      ...state,
      tags: action.tags,
      loading: false,
      error: null
    }
    
    case GET_TAGS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }
    
    case NEW_TAG_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null
    }
    
    case NEW_TAG_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }
    

    default:
    return state
  }
}