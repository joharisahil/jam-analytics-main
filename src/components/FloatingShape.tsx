import React from "react";

const FloatingShape = ({ color, size, top, left, animation }) => {
  return (
    <div
      className={`absolute ${color} ${size} opacity-15 rounded-full blur-lg`}
      style={{
        top: top,
        left: left,
        animation: animation, // Pass the animation prop for custom movement
      }}
    ></div>
  );
};

export default FloatingShape;
