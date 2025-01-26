// src/Components/Logs/LogItem.js

import Date from './Date/Date.js';
import Contents from './Contents/Contents.js';
import './LogItem.css';

const LogItem = (props) => {
    console.log(props);
    return(
        <div className="item">
            <Date date={props.date}/>
            <Contents study={props.study} time={props.time}/>
        </div>
    )
}

export default LogItem;