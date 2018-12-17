import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import indexReducer from '../reducers';

const store = createStore(indexReducer, applyMiddleware(ReduxThunk, logger));

export default store;
