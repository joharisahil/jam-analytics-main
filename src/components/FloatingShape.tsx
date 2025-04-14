import React from "react";

const FloatingShape = ({ color, size, top, left, animation }) => {
  return (
    <div
      className={`absolute ${color} ${size} opacity-15 rounded-full`}
      style={{
        top: top,
        left: left,
        animation: animation, // Pass the animation prop for custom movement
      }}
    ></div>
  );
};

export default FloatingShape;
