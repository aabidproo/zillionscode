import React, {useState, useEffect} from 'react'
import './overview.css'

function Overview() {

  const [counters, setCounters] = useState({
    yearsOfOperation: 0,
    projectsCompleted: 0,
    netPromoterScore: 0
  });

  useEffect(() => {
    const targetCounters = {
      yearsOfOperation: 2,
      projectsCompleted: 40,
      netPromoterScore: 74
    };

    const duration = 2000; // Duration of the counting animation in milliseconds
    const step = 1; // Step value for counting

    const startCounting = () => {
      const maxTargetValue = Math.max(...Object.values(targetCounters));
      const intervals = {};

      Object.keys(targetCounters).forEach(counter => {
        const intervalId = setInterval(() => {
          setCounters(prevCounters => ({
            ...prevCounters,
            [counter]: Math.min(prevCounters[counter] + step, targetCounters[counter])
          }));
        }, duration / (maxTargetValue / step));

        intervals[counter] = intervalId;
      });

      setTimeout(() => {
        Object.values(intervals).forEach(intervalId => clearInterval(intervalId));
      }, duration);
    };

    startCounting();
  }, []);
  return (
    <div className='overview_container'>
      <div className='overview_box_wrapper'>
        <div className='overview_box'>
          <h3>{counters.yearsOfOperation}</h3>
          <line></line>
          <h4>Years of Operation</h4>
          <p>and being strategic partners for our clients</p>
        </div>
        <div className='overview_box'>
          <h3>{counters.projectsCompleted}</h3>
          <line></line>
          <h4>App and Website Project Completed</h4>
          <p>On time delivery of projects is key to our success.</p>
        </div>
        <div className='overview_box'>
          <h3>{counters.netPromoterScore}</h3>
          <line></line>
          <h4>Net Promoter Score</h4>
          <p>Customer satisfaction has always been our priority</p>
        </div>

      </div>
    </div>
  )
}

export default Overview
