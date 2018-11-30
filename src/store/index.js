import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import indexReducer from '../reducers';

const store = createStore(indexReducer, applyMiddleware(logger));

export default store;
