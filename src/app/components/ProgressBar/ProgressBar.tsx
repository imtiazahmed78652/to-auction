// components/Line.tsx

import React from 'react';

interface LineProps {
  value: number;
  maxValue: number;
}

const ProgressBar: React.FC<LineProps> = ({ value, maxValue }) => {
  const widthPercentage = (value / maxValue) * 100;

  const greenIntensity = Math.min(255, Math.floor((value / maxValue) * 255));
  const redIntensity = 255 - greenIntensity;
  const color = `rgb(${redIntensity}, ${greenIntensity}, 0)`;

  return (
    <div className="line-container">
      <div
        className="line"
        style={{
          width: `${widthPercentage}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
