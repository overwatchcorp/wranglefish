import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RVector from './RVector';
import RMatrix from './RMatrix';

const parsedData = {};

const ParserComponent = state => state.parsers.parsers.map((parser) => {
  const { name, func, output: outputType } = parser;
  const { textInput } = state;
  const { text } = textInput;
  if (text) {
    const { data, warning } = eval(func)(text, parsedData);
    parsedData[name] = data;
    let output;
    switch (outputType) {
      case ('vector'): {
        output = (
          <div>
            {warning}
            <RVector array={data} name={name} />
          </div>
        );
        break;
      }
      case ('matrix'): {
        output = (
          <div>
            <b>{warning}</b>
            <RMatrix matrix={data} name={name} />
          </div>
        );
        break;
      }
      default: {
        output = <div>{JSON.stringify(data)}</div>;
      }
    }
    return (
      <div
        key={name}
        style={{
          borderBottom: '1px dashed gray',
          marginBottom: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <h6>
          <span style={{ fontFamily: 'Courier' }}>
            filter name:&nbsp;
            { name }
          </span>
        </h6>
        <pre><code>{ func }</code></pre>
        <h6>
          <span style={{ fontFamily: 'Courier' }}>output</span>
        </h6>
        <code>
          { output }
        </code>
      </div>
    );
  } else {
    return <div><code>{name}</code> waiting for data.</div>;
  }
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
