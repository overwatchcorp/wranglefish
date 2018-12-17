import textInput from './textInput';
import { FETCH_PARSERS, FETCH_PARSERS_SUCCESS } from '../actions';

const parsers = (state = {
  functions: {},
  parsers: [
    {
      name: 'metadata',
      url: 'https://gist.githubusercontent.com/overwatchcorp/47eaacd0ae78ce5e871405a1409d92dc/raw/6b971849e3ecf346c7570d9de22fe513f9954b06/fishscript.js',
      func: null,
    },
    {
      name: 'data',
      url: 'https://gist.githubusercontent.com/overwatchcorp/d37fc76913be743231fd5e96089e4b93/raw/a114f89e35859104be6172ed519f48ca08619ce4/data-fishscriptparser.js',
      func: null,
    },
  ],
}, action) => {
  switch (action.type) {
    case (FETCH_PARSERS): {
      // add isFetching to parsers if they are not already fetching or have been fetched
      // TODO: implement that other stuff
      const { parsers: stateParsers } = state;
      const newParsers = stateParsers.map((p) => {
        const newP = p;
        newP.isFetching = true;
        return newP;
      });
      const newState = Object.assign({}, state, { parsers: newParsers });
      return newState;
    }
    case (FETCH_PARSERS_SUCCESS): {
      const { parsers: stateParsers } = state;
      const newParsers = stateParsers.map((p) => {
        const newP = p;
        newP.isFetching = false;
        newP.func = action.parserFuncs[newP.name];
        return newP;
      });
      const newState = Object.assign({}, state, { parsers: newParsers });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default parsers;
