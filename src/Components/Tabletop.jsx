import React from 'react';
import Robot from './Robot';

const Tabletop = ({
  robotPosition,
  placeRobot,
  moveRobot,
  rotateRobot,
  reportRobot,
}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          position: 'relative',
          width: '250px',
          height: '250px',
          margin: 'auto',
        }}
      >
        {/* Render the tabletop grid (5x5) - you can add grid styling as needed */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 50px)' }}
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              style={{ border: '1px solid black', height: '50px' }}
            ></div>
          ))}
        </div>

        {/* Render the Robot component */}
        <Robot position={robotPosition} />
      </div>

      {/* Add UI controls  */}
      <div style={{ marginTop: '20px' }}>
        {/* Instead of button you can have input as well but that will create rerender on each input value unless you put debounce on top of it to prevent that you can mannualy edit it as well if it*/}
        <button onClick={() => placeRobot(0, 0, 'NORTH')}>
          PLACE 0,0,NORTH
        </button>
        <button onClick={moveRobot}>MOVE</button>
        <button onClick={() => rotateRobot('LEFT')}>LEFT</button>
        <button onClick={() => rotateRobot('RIGHT')}>RIGHT</button>
        <button onClick={reportRobot}>REPORT</button>
      </div>
    </div>
  );
};

export default Tabletop;
