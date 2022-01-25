import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducers from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducers,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
