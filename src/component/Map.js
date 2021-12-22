import React, {useState, useEffect, useRef} from 'react';

import {AiOutlineZoomIn, AiOutlineZoomOut} from 'react-icons/ai';

import AddFamily from './AddFamily';
import Circle from './Circle';
import Name from './Name';
import css from './map.module.css';

const Map = () => {

  // useState
  const wrapper = useRef(null);
  const [width, setWidth] = useState(3200);
  const [height, setHeight] = useState(3200);

  // zoomIn zoomOut
  const zoomIn = () => {
    setWidth((prev) => {return prev + 400});
    setHeight((prev) => prev + 400);
    console.log('zoomIn');
  };
  const zoomOut = () => {
    setWidth((prev) => prev - 400);
    setHeight(prev => prev - 400);
    console.log('zoomOut');
  };

  // mouse event and touch event
  // ontouchstart = onmousedown
  // ontouchmove = onmousemove
  // ontouchend ≒onmouseup



  return (
    <>
      <div style={{position: 'relative'}}>

        <AiOutlineZoomIn
          style={{
            position: 'absolute', top: '20', right: '20', fontSize: '20',
            zIndex: '10'
          }}
          onClick={zoomIn}
        />
        <AiOutlineZoomOut
          style={{
            position: 'absolute', top: '50', right: '20', fontSize: '20',
            zIndex: '10'
          }}
          onClick={zoomOut}
        />
      </div>

      <div className={css.maplist}>
        <svg width="1600" height="1600" viewBox={`0 0 ${width} ${height}`}>
          <g strokeWidth="2" stroke="black" fill="none">
            <polyline
              points="100 600, 100 500, 500 500, 500 600"
              fill="none"
              strokeLinejoin="round"
            />
            <line x1="300" y1="600" x2="300" y2="400"  />
            <line x1="200" y1="400" x2="400" y2="400"  />

            <Circle r="25" cx="175" cy="400" />
            <Name x="140" y="450" stroke="red" strokeWidth="1">小松 宣子</Name>

            <Circle r="25" cx="425" cy="400" />
            <Name x="392" y="450" stroke="blue" strokeWidth="1">坂本 義光</Name>

            <Circle r="25" cx="100" cy="625" />
            <Name x="70" y="675" stroke="blue" strokeWidth="1">小松 直政</Name>

            <Circle r="25" cx="300" cy="625" />
            <Name x="270" y="675" stroke="blue" strokeWidth="1">小松 正義</Name>

            <Circle r="25" cx="500" cy="625" stroke="green" />
            <Name x="470" y="675" stroke="blue" strokeWidth="1">小松 数正</Name>
          </g>
        </svg>

        <AddFamily />
      </div>



    </>
  );
};

export default Map;
