import React from 'react';

const Robot = ({ position }) => {
  if (!position) {
    return null; // Do not render if the robot is not placed on the table
  }

  const { x, y, facing } = position;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x * 50}px`, // Assuming each grid unit is 50px
        top: `${(4 - y) * 50}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red', // You can customize the color
      }}
    >
      {facing.charAt(0)}{' '}
    </div>
  );
};

export default Robot;
