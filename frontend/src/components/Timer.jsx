import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timer = () => {
  const [timerData, setTimerData] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const fetchTimerData = async () => {
      try {
        const response = await axios.get('/api/timer');
        const { hours, minutes, seconds } = response.data;
        setTimerData({ hours, minutes, seconds });
      } catch (error) {
        console.error('Error fetching timer data:', error);
      }
    };

    // Fetch data initially
    fetchTimerData();

    // Fetch data every second
    const interval = setInterval(fetchTimerData, 1000);

    return () => {
      clearInterval(interval); // Clean up interval on unmount
    };
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      <h2>Timer Data</h2>
      <div>
        <p>Hours: {timerData.hours}</p>
        <p>Minutes: {timerData.minutes}</p>
        <p>Seconds: {timerData.seconds}</p>
      </div>
    </div>
  );
};

export default Timer;

