import {Platform} from 'react-native';
import fetchHelper from '../helpers/fetchHelper';

const apiMiddleware = ({dispatch, getState}) => next => async ({
  type = '',
  payload = {},
}) => {
  if (type !== 'API_REQUEST') {
    return next({type, payload});
  }
  try {
    dispatch({type: payload.onStart, payload: {loading: true}});

    dispatch({type: payload.onStart});
    let data = await fetchHelper({
      METHOD: payload.method,
      URL: payload.url,
      data: payload.data,
      resType: payload.resType,
      token: payload.token,
    });

    if (Platform.OS === 'android') {
      data = data
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '')
        .replace(/&#8217;/g, "'");
    }

    dispatch({type: payload.onSuccess, payload: JSON.parse(data)});
  } catch (error) {
    dispatch({
      type: payload.onFailure,
      payload: error,
    });
  }

  return getState();
};

export default apiMiddleware;
