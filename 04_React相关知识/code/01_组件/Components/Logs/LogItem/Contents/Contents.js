// src/Components/Logs/LogItem/Contents/Contents.js

import './Contents.css';

const Contents = () => {
    return(
        // 日志内容容器
        <div className='content'>
            {/* 学习内容容器 */}
            <div className='study'>
                <h2>学习 React</h2>
            </div>
            {/* 学习时间容器 */}
            <div className='time'>
                20 分钟
            </div>
        </div>
    )
};

export default Contents;