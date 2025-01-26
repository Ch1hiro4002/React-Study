// src/Components.Logs/Logs.js

import LogItem from './LogItem/LogItem.js';
import './Logs.css'

const Logs = () => {

  return(
    <div className="logs">
      <LogItem />  
      <LogItem /> 
      <LogItem /> 
    </div>
  )
  
};

export default Logs;