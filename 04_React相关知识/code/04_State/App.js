// src/App.js

// 一个计数器
import { useState } from 'react';
import './App.css';

const App = () => {
    // 使用 State Hook
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState({name: 'Tom', age: 18});

    // 创建点击事件
    const addHandler = () => {
        setTimeout(() => {
            setCounter((prevState) => {
                return prevState + 1;
            });
        }, 1000);
    }

    const subHandler = () => {
        setCounter(counter - 1);
        console.log(counter);
    }

    const updateUserHandler = () => {
        // 如果直接修改旧的 user 对象，React 不会重新渲染
        // user.name = 'John';
        // user.age = 20;
        // console.log(user);
        // setUser(user);

        // 如果想要重新渲染，需要创建一个新的对象，这里相当于把 user 对象的属性拷贝到一个新的对象中
        // const newUser = Object.assign({}, user);
        // newUser.name = 'John';
        // newUser.age = 20;
        // setUser(newUser);

        // 使用展开运算符也可以实现重新渲染
        setUser({...user, name: 'John', age: 20});
    }
    
    return(
        <div className='app'>
            <h1>{counter}--{user.name}--{user.age}</h1>
            <button onClick={addHandler}>+</button>
            <button onClick={subHandler}>-</button>
            <button onClick={updateUserHandler}>Update</button>
        </div>
    )
};

export default App;