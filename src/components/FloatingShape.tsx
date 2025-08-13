import React from "react";

type FloatingShapeProps = {
  color: string;
  size: string;
  top: string | number;
  left: string | number;
  animation?: string;
};

const FloatingShape: React.FC<FloatingShapeProps> = ({ color, size, top, left, animation }) => {
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
