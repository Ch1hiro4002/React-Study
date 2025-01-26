// src/index.js 是js的入口文件

import ReactDOM from 'react-dom/client';
import './index.css';

const App = <div className='log'>
    {/* 日志项容器 */}
    <div className='item'>
        {/* 日期容器 */}
        <div className='date'>
            <div className='month'>
                一月
            </div>
            <div className='day'>
                24
            </div>
        </div>
        {/* 日志内容容器 */}
        <div className='content'>
            {/* 学习内容容器 */}
            <div className='study'>
                <h2>学习 React</h2>
            </div>
            {/* 学习时间容器 */}
            <div className='time'>
                20 天
            </div>
        </div>
    </div>

    <div className='item'>
        {/* 日期容器 */}
        <div className='date'>
            <div className='month'>
                一月
            </div>
            <div className='day'>
                24
            </div>
        </div>
        {/* 日志内容容器 */}
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
    </div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);