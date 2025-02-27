// src/Components.Logs/Logs.js

import LogItem from './LogItem/LogItem.js';
import './Logs.css'

const Logs = () => {

  const LogDate = [
    {
      id: '001',
      date: new Date(2024, 5, 25, 19, 30),
      study: '学习React',
      time: '10'
    },
    {
      id: '002',
      date: new Date(2025, 6, 20, 8, 30),
      study: '学习Move',
      time: '20'
    },
    {
      id: '003',
      date: new Date(2025, 6, 25, 12, 25),
      study: '学习JavaScript',
      time: '30'
    }
  ];

  const LogItemDate = LogDate.map(item => <LogItem key={item.id} date={item.date} study={item.study} time={item.time} />)

  return(
    <div className="logs">
      { LogItemDate }
    </div>
  )
  
};

export default Logs;