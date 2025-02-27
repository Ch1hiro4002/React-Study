// src/Components/Logs/LogItem.js

import Date from './Date/Date.js';
import Contents from './Contents/Contents.js';
import './LogItem.css';

const LogItem = () => {
    return(
        <div className="item">
            <Date />
            <Contents />
        </div>
    )
}

export default LogItem;