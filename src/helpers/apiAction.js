const API_REQUEST = 'API_REQUEST';
const API_REQUEST_START = 'API_REQUEST_START';
const API_REQUEST_END = 'API_REQUEST_END';
const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

export default ({
  url = '',
  method = 'GET',
  data = null,
  onStart = API_REQUEST_START,
  onEnd = API_REQUEST_END,
  onSuccess = API_REQUEST_SUCCESS,
  onFailure = API_REQUEST_FAILURE,
}) => ({
  type: API_REQUEST,
  payload: {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    onStart,
    onEnd,
  },
});
