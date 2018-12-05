import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RVector from './RVector';
import RMatrix from './RMatrix';

const ParserComponent = state => state.parsers.parsers.map((parser) => {
  return (
    <div>
      <code>{ parser.name }</code>
    </div>
  );
});

ParserComponent.propTypes = () => ({
  parsers: PropTypes.arrayOf({
    name: PropTypes.func.isRequired,
    func: PropTypes.string.isRequired,
  }),
});

const mapStateToProps = ({ textInput, parsers }) => ({
  textInput,
  parsers,
});

const Parser = connect(mapStateToProps)(ParserComponent);

export default Parser;
