import React from 'react';
import PropTypes from 'prop-types';

// what this component is supposed to produce
// m <- matrix(c(NA,2,30,6,19,122,0,NA,18,
// 0,19,85,0,1,NA,3,8,84,0,0,0,NA,267,50,0,
// 0,0,5,NA,10,1,0,4,4,1,NA), ncol=6)
const RMatrix = ({ matrix, name }) => {
  const ncol = matrix[0].length;
  let vector = [];
  matrix.map(arr => (vector = vector.concat(arr)));
  const output = `${name} <- matrix(c(${vector}), ncol=${ncol})`
  return (
    <div>
      { output }
    </div>
  );
};

RMatrix.propTypes = () => ({
  matrix: PropTypes.arrayOf(PropTypes.int).isRequired,
  name: PropTypes.string.isRequired,
});

export default RMatrix;
