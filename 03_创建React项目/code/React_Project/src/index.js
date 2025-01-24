// src/index.js 是js的入口文件

import ReactDOM from 'react-dom/client';

const App = <div>
    <h1>这是一个 React 项目！</h1>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);