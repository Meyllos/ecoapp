import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducers from './rootReducers';
import apiMiddleware from '../middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware];

export default createStore(
  combineReducers(rootReducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
