import React from 'react';

const NameAndCircle = (props) => {
  const {r, cx, cy, stroke, strokeWidth, fill} = props;
  return (
    <>
      <svg>
        <text x="140" y="150" stroke="red" strokeWidth="1">小松 宣子</text>

      </svg>
    </>
  );
};

NameAndCircle.defaultProps = {
  stroke: "black",
  strokeWidth: "2",
  fill: "none",
}

export default NameAndCircle;
