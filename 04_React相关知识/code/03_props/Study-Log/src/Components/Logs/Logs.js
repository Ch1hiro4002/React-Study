// src/Components.Logs/Logs.js

import LogItem from './LogItem/LogItem.js';
import './Logs.css'

const Logs = () => {

  return(
    <div className="logs">
      <LogItem date={new Date(2024, 5, 25, 19, 30)} study='学习React' time='10'/>  
      <LogItem date={new Date(2025, 6, 20, 8, 30)} study='学习Move' time='20'/> 
      <LogItem date={new Date(2025, 6, 25, 12, 25)} study='学习JavaScript' time='30'/> 
    </div>
  )
  
};

export default Logs;