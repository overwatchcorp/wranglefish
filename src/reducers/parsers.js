import textInput from './textInput';
// import { UPDATE_PARSER_ALGORITHM } from '../actions';

const parsers = (state = {
  functions: {},
  parsers: [
    {
      name: 'metadata',
      output: {
        type: 'RVector',
      },
      url: 'https://gist.githubusercontent.com/overwatchcorp/47eaacd0ae78ce5e871405a1409d92dc/raw/6b971849e3ecf346c7570d9de22fe513f9954b06/fishscript.js',
    },
    {
      name: 'data',
      output: {
        type: 'RMatrix',
      },
      url: 'https://gist.githubusercontent.com/overwatchcorp/d37fc76913be743231fd5e96089e4b93/raw/a114f89e35859104be6172ed519f48ca08619ce4/data-fishscriptparser.js',
    },
  ],
}, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default parsers;
