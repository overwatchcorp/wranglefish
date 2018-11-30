export const UPDATE_TEXT_INPUT = 'UPDATE_TEXT_INPUT';

export const updateTextInput = text => ({
  type: UPDATE_TEXT_INPUT,
  text,
});

export const UPDATE_PARSER_ALGORITM = 'UPDATE_PARSER_ALGORITM';

export const updateParserAlgorithm = algorithm => ({
  type: UPDATE_PARSER_ALGORITM,
  algorithm,
});
