import React, { useState, useEffect } from 'react';

export const Timer = ({ setWaiting }) => {
  const [leftTime, setLeftTime] = useState(179);
  const minutes = Math.floor(leftTime / 60);
  let seconds = Math.floor(leftTime % 60).toString();

  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }

  useEffect(() => {
    const counter = setInterval(() => {
      setLeftTime(leftTime - 1);
    }, 1000);

    if (leftTime === 0) {
      setWaiting(false);
      clearInterval(counter);
      setLeftTime(179);
    }

    return () => {
      clearInterval(counter);
    };
  }, [leftTime, setWaiting]);

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
};
