// src/index.js 是js的入口文件

import ReactDOM from 'react-dom/client';
// 引入 App 组件
import App from './App.js'

// 创建根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

// React 组件可以直接通过 JSX 渲染
root.render(<App/>);