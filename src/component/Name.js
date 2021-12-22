import React from 'react';

const Name = (props) => {

  const {children, x, y, stroke, strokeWidth} = props;

  return (
    <>
      <text x={x} y={y} stroke={stroke} strokeWidth={strokeWidth} >{children}</text>
    </>
  );
};

export default Name;
