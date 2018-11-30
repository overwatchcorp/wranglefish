import { combineReducers } from 'redux';
import textInput from './textInput';
import parsers from './parsers';

const indexReducer = combineReducers({
  textInput,
  parsers,
});

export default indexReducer;
