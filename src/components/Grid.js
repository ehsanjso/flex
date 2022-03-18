import React from "react";

export default function Grid({ size }) {
  const style = {
    backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent calc(${size}px - 1px),
            rgba(255, 255, 255, 0.05) calc(${size}px - 1px),
            rgba(255, 255, 255, 0.05) ${size}px
          ),
          repeating-linear-gradient(
            -90deg,
            transparent,
            transparent calc(${size}px - 1px),
            rgba(255, 255, 255, 0.05) calc(${size}px - 1px),
            rgba(255, 255, 255, 0.05) ${size}px
          )`,
    backgroundSize: `${size}px ${size}x`,
  };
  return <div className="grid" style={style} />;
}
