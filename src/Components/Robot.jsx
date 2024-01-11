import React from 'react';
import './style.css';
const Robot = ({ position }) => {
  if (!position) {
    return null; // Do not render if the robot is not placed on the table
  }

  const { x, y, facing } = position;

  return (
    <div
      className="botProperties"
      style={{
        left: `${x * 50}px`, // Assuming each grid unit is 50px
        top: `${(4 - y) * 50}px`,
      }}
    >
      {facing.charAt(0)}{' '}
    </div>
  );
};

export default Robot;
