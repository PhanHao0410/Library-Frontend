import React, { useState, useEffect, useRef } from 'react';

import { TimerComponentContainer } from './styles';

const TimerComponent = ({ isReading, handleTimeStop }) => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const isReadingRef = useRef(isReading);

  useEffect(() => {
    if (isReading) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      handleTimeStop(seconds);
    }

    return () => clearInterval(intervalRef.current);
  }, [isReading]);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0',
    );
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <TimerComponentContainer>
      <h2>{formatTime(seconds)}</h2>
    </TimerComponentContainer>
  );
};

export default React.memo(TimerComponent);
