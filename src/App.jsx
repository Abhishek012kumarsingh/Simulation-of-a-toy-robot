import React, { useState } from 'react';
import Tabletop from './Components/Tabletop';
import './style.css';

const App = () => {
  const [robotPosition, setRobotPosition] = useState(null);
  const [report, setReport] = useState('');
  const [error, setError] = useState('');

  const placeRobot = (x, y, facing) => {
    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
      setRobotPosition({ x, y, facing });
      setError('');
    } else {
      setError('Invalid placement. Coordinates must be within 0-4.');
    }
  };

  const moveRobot = () => {
    if (!robotPosition) return;

    const { x, y, facing } = robotPosition;
    let newX = x;
    let newY = y;

    switch (facing) {
      case 'NORTH':
        newY = Math.min(y + 1, 4);
        break;
      case 'SOUTH':
        newY = Math.max(y - 1, 0);
        break;
      case 'EAST':
        newX = Math.min(x + 1, 4);
        break;
      case 'WEST':
        newX = Math.max(x - 1, 0);
        break;
      default:
        break;
    }

    setRobotPosition({ x: newX, y: newY, facing });
    setError('');
  };

  const rotateRobot = (direction) => {
    if (!robotPosition) return;

    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const currentFacingIndex = directions.indexOf(robotPosition.facing);

    let newFacingIndex;
    if (direction === 'LEFT') {
      newFacingIndex = (currentFacingIndex + 3) % 4;
    } else {
      newFacingIndex = (currentFacingIndex + 1) % 4;
    }

    setRobotPosition({
      ...robotPosition,
      facing: directions[newFacingIndex],
    });
    setError('');
  };

  const reportRobot = () => {
    if (robotPosition) {
      const { x, y, facing } = robotPosition;
      const reportText = `${x},${y},${facing}`;
      setReport(reportText);
      console.log(reportText); // Log the report to the console
    } else {
      setReport('');
      setError('Robot has not been placed on the table.');
    }
  };

  return (
    <div>
      <Tabletop
        robotPosition={robotPosition}
        placeRobot={placeRobot}
        moveRobot={moveRobot}
        rotateRobot={rotateRobot}
        reportRobot={reportRobot}
      />

      {/* Display the report and error messages */}
      <div className="errorBlock">
        {report && <p>Report: {report}</p>}
        {error && <p className="redColor">{error}</p>}
      </div>
    </div>
  );
};

export default App;
