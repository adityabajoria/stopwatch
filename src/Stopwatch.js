import React, { useState, useEffect }from 'react';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active]);

  function pad(val) {
    return String(val).padStart(2, "0");
  }

  function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    return (`${pad(hours)} : ${pad(minutes)} : ${pad(secs)}`);
  }

  function Reset() {
    setTime(0);
    setActive(false);
  }

  return (
    <div className='stopwatch'>
      <h1>StopWatch</h1>
      <p className='time-display'>{formatTime(time)}</p>
      <div className='button'>
      <button onClick={() => setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Stop</button>
      <button onClick={() => setActive(true)}>Resume</button>
      <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}