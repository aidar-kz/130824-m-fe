import React, { useState } from "react";

const MouseCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <p style={{ color: "blueviolet", fontSize: "25px" }}>
        Mouse Coordinates: X: {coordinates.x}, Y: {coordinates.y}
      </p>
    </div>
  );
};

export default MouseCoordinates;
