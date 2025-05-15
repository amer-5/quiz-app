import React from "react";

interface CountdownProps {
  time: number;
  maxTime?: number;
}

const CountdownBar: React.FC<CountdownProps> = ({ time, maxTime = 30 }) => {
  // Calculate progress as a percentage, ensuring it stays between 0 and 100
  const progress = Math.max(0, Math.min(100, (time / maxTime) * 100));

  return (
    <div className="w-full bg-[#F4F4F4] rounded-[3px]">
      <div
        style={{
          width: `${progress}%`,
          transition: "width 0.5s linear",
        }}
        className="h-1.5 bg-[#2559D2] rounded-[3px]"
      ></div>
    </div>
  );
};

export default CountdownBar;
