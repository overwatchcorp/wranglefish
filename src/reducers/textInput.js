import { UPDATE_TEXT_INPUT } from '../actions';
import demoData from './demoData';

const textInput = (state = { text: '' }, action) => {
  switch (action.type) {
    case (UPDATE_TEXT_INPUT): {
      const { text } = action;
      const newState = Object.assign({}, state, {
        text,
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default textInput;
