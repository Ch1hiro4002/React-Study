// src/Components/Logs/LogItem/Contents/Contents.js

import './Contents.css';

const Contents = (props) => {
    return(
        // 日志内容容器
        <div className='content'>
            {/* 学习内容容器 */}
            <div className='study'>
                <h2>{props.study}</h2>
            </div>
            {/* 学习时间容器 */}
            <div className='time'>
                {props.time} 分钟
            </div>
        </div>
    )
};

export default Contents;