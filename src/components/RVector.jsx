import React from 'react';
import PropTypes from 'prop-types';

const RVector = (props) => {
  const { array, name } = props;
  return (
    <code>
      {name}
      &nbsp;&lt;=
      c(
      {
        array.map((v, i) => `${JSON.stringify(v.value)} ${(array[i + 1]) ? ', ' : ''}`)
      }
      );
    </code>
  )
}

RVector.propTypes = () => ({
  array: PropTypes.array,
  name: PropTypes.string,
});

RVector.defaultProps = () => ({
  name: 'No name!!!',
  array: [],
});

export default RVector;
