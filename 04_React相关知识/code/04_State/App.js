// src/App.js

// 一个计数器
import { useState } from 'react';
import './App.css';

const App = () => {
    // 使用 State Hook
    const [counter, setCounter] = useState(0);

    // 创建点击事件
    const AddHandler = () => {
        setTimeout(() => {
            setCounter((prevCounter) => {
                return prevCounter + 1;
            });
        }, 1000);
    }

    const SubHandler = () => {
        setCounter(counter - 1);
        console.log(counter);
    }
    
    return(
        <div className='app'>
            <h1>{counter}</h1>
            <button onClick={AddHandler}>+</button>
            <button onClick={SubHandler}>-</button>
        </div>
    )
};

export default App;