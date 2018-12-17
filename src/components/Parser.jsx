import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getParsers as getParsersAction } from '../actions';

class ParserComponent extends Component {
  componentWillMount() {
    const { getParsers, parsers } = this.props;
    getParsers(parsers.parsers);
  }

  render() {
    const { parsers } = this.props;
    const component = parsers.parsers.map(parser => (
      <div key={parser.name}>
        <code>
          name:&nbsp;
          { parser.name }
          <br />
          fuction:
          <br />
          { parser.func }
        </code>
        <hr />
      </div>
    ));
    return component;
  }
}

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

const mapDispatchToProps = dispatch => ({
  getParsers: (parsers) => dispatch(getParsersAction(parsers)),
});

const Parser = connect(mapStateToProps, mapDispatchToProps)(ParserComponent);

export default Parser;
