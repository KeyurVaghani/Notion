import React, { useEffect } from 'react';
import './timer.css';

const Timer = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="timer">
      <h1>Count down to Bitcoin Halving</h1>
      <div className="timer-content">
        <div className="timer-item">
          <p className="timer-label">Days</p>
          <div className="timer-value">{days}</div>
        </div>
        <div className="timer-item">
          <p className="timer-label">Hours</p>
          <div className="timer-value">{hours}</div>
        </div>
        <div className="timer-item">
          <p className="timer-label">Minutes</p>
          <div className="timer-value">{minutes}</div>
        </div>
        <div className="timer-item">
          <p className="timer-label">Seconds</p>
          <div className="timer-value">{seconds}</div>
        </div>
      </div>
    </div>
  );
}

Timer.defaultProps = {
  deadline: "2024-04-19"
};

export default Timer;