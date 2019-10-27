import {
  GET_POSTS,
  GET_POSTS_START,
  GET_POSTS_FAIL,
  GET_ONE_POST,
  GET_ONE_POST_START,
  GET_ONE_POST_FAIL,
  SEARCH_POST,
  SEARCH_POST_START,
  SEARCH_POST_FAIL,
} from '../action-types/posts';
import apiAction from '../../helpers/apiAction';
import config from '../../config';

export const getPosts = (params = '') => async dispatch =>
  dispatch(
    apiAction({
      url: `${config.baseUrl}posts${params}`,
      onStart: GET_POSTS_START,
      onSuccess: GET_POSTS,
      onFailure: GET_POSTS_FAIL,
    }),
  );

export const getSinglePost = (postId = 0) => async dispatch =>
  dispatch(
    apiAction({
      url: `${config.baseUrl}posts/${postId}`,
      onStart: GET_ONE_POST_START,
      onSuccess: GET_ONE_POST,
      onFailure: GET_ONE_POST_FAIL,
    }),
  );

export const searchPost = (params = '') => async dispatch =>
  dispatch(
    apiAction({
      url: `${config.baseUrl}posts${params}`,
      onStart: SEARCH_POST_START,
      onSuccess: SEARCH_POST,
      onFailure: SEARCH_POST_FAIL,
    }),
  );
