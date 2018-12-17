import fetch from 'node-fetch';

export const UPDATE_TEXT_INPUT = 'UPDATE_TEXT_INPUT';
export const FETCH_PARSERS = 'FETCH_PARSERS';
export const FETCH_PARSERS_SUCCESS = 'FETCH_PARSERS_SUCCESS';

export const updateTextInput = text => ({
  type: UPDATE_TEXT_INPUT,
  text,
});

export const fetchParsers = () => ({
  type: FETCH_PARSERS,
});

export const fetchParsersSuccess = parserFuncs => ({
  type: FETCH_PARSERS_SUCCESS,
  parserFuncs,
});

export const getParsers = parsers => async (dispatch) => {
  dispatch(fetchParsers());
  // TODO: add error catching
  const parserFuncs = {};
  await Promise.all(parsers.map(async (parser) => {
    const raw = await fetch(parser.url);
    const func = await raw.text();
    parserFuncs[parser.name] = func;
  }));
  dispatch(fetchParsersSuccess(parserFuncs));
};
