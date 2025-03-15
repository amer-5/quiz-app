import { useState, useEffect } from "react";

interface CountdownProps {
  time?: number;
}

const CountdownBar: React.FC<CountdownProps> = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState(time || 30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const progress = (timeLeft / (time || 30)) * 100;

  return (
    <div className="w-full bg-[#F4F4F4] rounded-[3px]">
      <div
        style={{ width: `${progress}%`, transition: "width 1s linear" }}
        className={`h-1.5 bg-[#2559D2]`}
      ></div>
    </div>
  );
};

export default CountdownBar;
