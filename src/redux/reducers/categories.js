import {
  GET_CATEGORIES,
  GET_CATEGORIES_START,
  GET_ONE_CATEGORY,
  GET_ONE_CATEGORY_START,
} from '../action-types/categories';
import initialState from '../initial-states/categories';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    // all categories
    case GET_CATEGORIES_START:
      return {
        ...state,
        allCategories: [],
        loading: true,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
        loading: false,
      };
    // one category
    case GET_ONE_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        singleCategory: payload,
        loading: false,
      };
    default:
      return state;
  }
};
