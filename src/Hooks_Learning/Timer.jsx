import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    if (time === 10) {
  clearInterval(interval);
}

    return () => clearInterval(interval);
  }, [time]);

  return <h2>Time: {time}</h2>;
};

export default Timer;