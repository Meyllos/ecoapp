import {
  GET_POSTS,
  GET_POSTS_START,
  GET_ONE_POST,
  GET_ONE_POST_START,
  SEARCH_POST,
  SEARCH_POST_START,
  SEARCH_POST_FAIL,
} from '../action-types/posts';
import initialState from '../initial-states/posts';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    // all posts
    case GET_POSTS_START:
      return {
        ...state,
        allPosts: [],
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        allPosts: Array.isArray(payload) ? payload : [],
        loading: false,
      };
    // one post
    case GET_ONE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_POST:
      return {
        ...state,
        singlePost: payload,
        loading: false,
      };
    // search post
    case SEARCH_POST_START:
      return {
        ...state,
        searchPost: {
          ...state.searchPost,
          loading: true,
          results: [],
        },
      };
    case SEARCH_POST:
      return {
        ...state,
        searchPost: {
          ...state.searchPost,
          loading: false,
          results: Array.isArray(payload) ? payload : [],
        },
      };
    default:
      return state;
  }
};
