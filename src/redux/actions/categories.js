import {
  GET_CATEGORIES,
  GET_CATEGORIES_START,
  GET_CATEGORIES_FAIL,
  GET_ONE_CATEGORY,
  GET_ONE_CATEGORY_START,
  GET_ONE_CATEGORY_FAIL,
} from '../action-types/categories';
import apiAction from '../../helpers/apiAction';
import config from '../../config';

export const getCategories = (params = '') => async dispatch =>
  dispatch(
    apiAction({
      url: `${config.baseUrl}categories${params}`,
      onStart: GET_CATEGORIES_START,
      onSuccess: GET_CATEGORIES,
      onFailure: GET_CATEGORIES_FAIL,
    }),
  );

export const getSingleCategory = (categoryId = 0) => async dispatch =>
  dispatch(
    apiAction({
      url: `${config.baseUrl}categories/${categoryId}`,
      onStart: GET_ONE_CATEGORY_START,
      onSuccess: GET_ONE_CATEGORY,
      onFailure: GET_ONE_CATEGORY_FAIL,
    }),
  );
