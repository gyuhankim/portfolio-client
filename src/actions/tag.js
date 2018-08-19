import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_TAGS_REQUEST = 'GET_TAGS_REQUEST';
export const getTagsRequest = () => ({
  type: GET_TAGS_REQUEST
})

export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const getTagsSuccess = tags => ({
  type: GET_TAGS_SUCCESS,
  tags
})

export const GET_TAGS_ERROR = 'GET_TAGS_ERROR';
export const getTagsError = err => ({
  type: GET_TAGS_ERROR,
  err
})

export const getTags = () => dispatch => {
  dispatch(getTagsRequest());

  return fetch(`${API_BASE_URL}/tags`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(tags => dispatch(getTagsSuccess(tags)))
  .catch(err => dispatch(getTagsError(err)))
}

export const NEW_TAG_SUCCESS = 'NEW_TAG_SUCCESS';
export const newTagSuccess = () => ({
  type: NEW_TAG_SUCCESS
})

export const NEW_TAG_ERROR = 'NEW_TAG_ERROR';
export const newTagError = err => ({
  type: NEW_TAG_ERROR,
  err
})

export const newTag = tag => dispatch => {
  return fetch(`${API_BASE_URL}/tags`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(tag)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(() => dispatch(getTags()))
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
  });
};