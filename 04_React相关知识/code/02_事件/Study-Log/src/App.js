// src/App.js

// 创建函数式组件
const App = () => {

    const clickHandler = (event) => {
        // 阻止默认行为
        event.preventDefault();
        // 阻止冒泡
        event.stopPropagation();

        alert('我是 div!');
    }

    return(
        <div onClick={clickHandler} style={{width: 200, height: 200, backgroundColor: 'skyblue', margin: '100px auto'}}>
            <button onClick={clickHandler}>点击我</button>
            <br/>
            <a href="https://www.baidu.com" onClick={clickHandler}>超链接</a>
        </div>
    )
};

// 导出默认 App 组件
export default App; 