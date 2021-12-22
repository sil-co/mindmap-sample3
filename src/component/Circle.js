import React from 'react';

const Circle = (props) => {

  const {r, cx, cy, stroke} = props;

  return (
    <>
     <circle r={r} cx={cx} cy={cy} stroke={stroke} />
    </>
  );
};

export default Circle;
