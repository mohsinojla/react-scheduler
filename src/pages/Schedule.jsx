
import React, { useState, useEffect } from 'react';
import './Schedule.css';
import { useNavigate } from 'react-router-dom';
import ScheduleTable from '../components/ScheduleTable';

export default function Schedule() {
  const [books] = useState(() => JSON.parse(localStorage.getItem('checkedBooks')) || []);
  const [startDate] = useState(() => localStorage.getItem('startDate') || '');
  const [endDate] = useState(() => localStorage.getItem('endDate') || '');
  const [scheduleData, setScheduleData] = useState(() => JSON.parse(localStorage.getItem('scheduleData')) || {});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
  }, [scheduleData]);

  return (
  <div className="fade-in">
    <div className="schedule-container">
      <div className="schedule-inner">
        <div className="schedule-header">
          <h2>📅 Your Study Schedule</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            🔙 Back to Home
          </button>
        </div>
        <ScheduleTable
          books={books}
          startDate={startDate}
          endDate={endDate}
          scheduleData={scheduleData}
          setScheduleData={setScheduleData}
        />
      </div>
    </div>
  </div>
);
}
