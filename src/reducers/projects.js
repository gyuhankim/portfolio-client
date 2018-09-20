import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/projects';

const initialState = {
  project: '',
  modalHidden: true
}

export default function projectReducer(state = initialState, action) {
  switch(action.type) {

    case SHOW_MODAL:
    return {
      ...state,
      modalHidden: false,
      project: action.project
    }

    case HIDE_MODAL:
    return {
      ...state,
      modalHidden: true
    }

    default:
    return state

  }
}