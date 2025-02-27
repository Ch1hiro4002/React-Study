// src/Components/Logs/LogItem/Date/Date.js

import './Date.css';

const Date = (props) => {
    // 将日期转换为中文格式
    const month = props.date.toLocaleString('zh-CN', { month: 'long' });
    const day = props.date.getDate();
    return (
        // 日期容器
        <div className='date'>
            <div className='month'>
                {month} 
            </div>
            <div className='day'>
                {day}
            </div>
        </div>
    )
};

export default Date;