// src/App.js
import { useRef } from 'react';
import './App.css';

const App = () => {
    // 获取原生 DOM 对象

    // 创建一个钩子容器，只能在函数组件中使用
    const h1Ref = useRef();

    const clickHandler = () => {
        h1Ref.current.innerHTML = '标题被修改了';
        alert(h1Ref.current);
        
    }
    return(
        <div className='app'>
            <h1 ref={h1Ref}>标题</h1>
            <button onClick={clickHandler}>点击</button>
        </div>
    )
};

export default App;