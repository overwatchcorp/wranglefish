import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTextInput as updateTextInputAction } from '../actions';

const TextInputComponent = ({ textInput, updateTextInput }) => (
  <div>
    <div className="form-group">
      <textarea
        autoFocus
        value={textInput.text}
        onChange={updateTextInput}
        rows="5"
        placeholder="Paste data here"
        className="form-control"
      />
    </div>
  </div>
);

TextInputComponent.propTypes = () => ({
  textInput: {
    text: PropTypes.string.isRequired,
  },
});

const mapStateToProps = ({ textInput }) => ({
  textInput,
});

const mapDispatchToProps = dispatch => ({
  updateTextInput: event => dispatch(updateTextInputAction(event.target.value)),
});

const TextInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent);

export default TextInput;
