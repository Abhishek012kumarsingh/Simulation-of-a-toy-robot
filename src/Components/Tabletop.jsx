import React from 'react';
import Robot from './Robot';
import './style.css';

const Tabletop = ({
  robotPosition,
  placeRobot,
  moveRobot,
  rotateRobot,
  reportRobot,
}) => {
  return (
    <div className="tableWrapper">
      <div className="tableGrid">
        {/* Render the tabletop grid (5x5) - you can add grid styling as needed */}
        <div className="tabletopGrid">
          {Array.from({ length: 25 }).map((_, index) => (
            <div key={index} className="gridBlock"></div>
          ))}
        </div>

        {/* Render the Robot component */}
        <Robot position={robotPosition} />
      </div>

      {/* Add UI controls  */}
      <div className="marginTop20">
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
