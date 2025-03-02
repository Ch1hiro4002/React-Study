# 1. React 组件

​	在**React**中网页被拆分为了一个一个组件，组件是独立可复用的代码片段。具体来说，组件可能是页面中的一个按钮，一个对话框，一个弹出层等。React中定义组件的方式有**两种**：基于函数的组件和基于类的组件。

**函数式组件：**

- 函数组件就是一个会返回`JSX`的普通函数
- 组件的首字母必须是大写

```js
// src/App.js

// 创建函数式组件
const App = () => {
    return <h1>Hello React!</h1>;
};

// 导出默认 App 组件
export default App;
```

**类组件：**

- 类组件必须继承`React.Component`这个类
- 类组件中必须有一个`render`方法，并且该方法的返回值是一个`JSX`语句

```js
// src/App.js

import React from "react";

// 创建类组件
class App extends React.Component {
    render() {
        return <h1>Hello React!</h1>;
    };
}

// 导出默认 App 组件
export default App;
```

下面用**组件**对之前的项目进行修改，先来确认下项目结构

```
- src
	- Components	// 存放各种组件
		- Logs
			- LogItem
				- Data
					Data.js
					Data.css
				- Contents
					Contents.js
					Contents.css
				LogItem.js
				LogItem.css
			Logs.js
			Logs.css
	App.js
	index.js
	index.css
```

确定好项目结构开始创建，代码放在了[仓库](https://github.com/Ch1hiro4002/React-Study)

# 2. 事件

在原生**DOM**中事件常用`document.getElementById('btn').onclick = function(){}`或者`document.getElementById('btn').addEventListener('click', function(){}, false)`创建，

而在**React**中事件需要通过元素的属性来设置，属性需要使用驼峰命名法，如（`onClick`、`onChange`等），属性值需要一个回调函数作为参数

```javascript
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
        <div style={{width: 200, height: 200, backgroundColor: 'skyblue', margin: '100px auto'}}>
            <button onClick={clickHandler}>点击我</button>
            <br/>
            <a href="https://www.baidu.com" onClick={clickHandler}>超链接</a>
        </div>
    )
};

// 导出默认 App 组件
export default App;
```

**注意：**回调函数作为属性的参数时不能加括号

在**React**中无法通过`return false`取消默认行为，而是通过在函数中定义`event.preventDefault();`来阻止默认行为的发生（例如：阻止超链接的跳转）

在**React**中通过`event.stopPropagation();`来组织冒泡行为（即子元素触发事件时，不会触发父元素的事件）

# 3. props 动态设置

动态设置类似给函数传入参数，可以动态改变组件中的内容

在父组件中：

```javascript
// src/Components.Logs/Logs.js

import LogItem from './LogItem/LogItem.js';
import './Logs.css'

const Logs = () => {

  return(
    <div className="logs">
      <LogItem date={new Date(2024, 5, 25, 19, 30)} study='学习React' time='10'/>  
      <LogItem date={new Date(2025, 6, 20, 8, 30)} study='学习Move' time='20'/> 
      <LogItem date={new Date(2025, 6, 25, 12, 25)} study='学习JavaScript' time='30'/> 
    </div>
  )
  
};

export default Logs;
```

在子组件中传入`props`，`props`相当于一个对象存储父组件中设置的属性

```javascript
// src/Components/Logs/LogItem.js

import Date from './Date/Date.js';
import Contents from './Contents/Contents.js';
import './LogItem.css';

const LogItem = (props) => {
    console.log(props);
    return(
        <div className="item">
            <Date date={props.date}/>
            <Contents study={props.study} time={props.time}/>
        </div>
    )
}

export default LogItem;
```

![image-20250126212757539](https://oss-of-ch1hiro.oss-cn-beijing.aliyuncs.com/imgs/202501262128427.png)

```javascript
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
```

```javascript
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
```

**注意：**在子组件中都要传入`props`参数，而且`props`组件是只读的，不能被修改

# 4. 优化 Date

```Jsx
// src/Components.Logs/Logs.js

import LogItem from './LogItem/LogItem.js';
import './Logs.css'

const Logs = () => {

  const LogDate = [
    {
      id: '001',
      date: new Date(2024, 5, 25, 19, 30),
      study: '学习React',
      time: '10'
    },
    {
      id: '002',
      date: new Date(2025, 6, 20, 8, 30),
      study: '学习Move',
      time: '20'
    },
    {
      id: '003',
      date: new Date(2025, 6, 25, 12, 25),
      study: '学习JavaScript',
      time: '30'
    }
  ];

  const LogItemDate = LogDate.map(item => <LogItem key={item.id} date={item.date} study={item.study} time={item.time} />)

  return(
    <div className="logs">
      { LogItemDate }
    </div>
  )
  
};

export default Logs;
```

# 5. State 简介

**抛出问题：一个组件渲染时只会返回一次return的值，怎么可以修改return中的值并返回？**

以计数器为例：

```JSX
// src/App.js

// 一个计数器

import './App.css';

const App = () => {
    // 创建一个变量
    let counter = 0;

    // 创建点击事件
    const AddHandler = () => {
        counter += 1;
        console.log(counter);
    }

    const SubHandler = () => {
        counter -= 1;
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
```

当触发点击事件后`counter`的值确实改变了，但是页面当中并没有重新渲染内容，这时就要用到`State`这个`Hook`去重新渲染组件

**State**需要一个值作为参数，并返回一个数组：

- 数组中第一个参数是初始值，直接修改不会触发组件的重新渲染
- 数组中第二个参数是一个函数，调用其修改`state`会出发组件的重新渲染

```JSX
// 使用 State Hook
const [counter, setCounter] = useState(0);

// 创建点击事件
const AddHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
}

const SubHandler = () => {
    setCounter(counter - 1);
    console.log(counter);
}
```

为了避免点击速度过快带来计算错误，可以给`setState()`传递回调函数来避免这一问题

```JS
const AddHandler = () => {
    setTimeout(() => {
        setCounter((prevState) => {
            return prevState + 1;
        });
    }, 1000);
}
```

`setTimeout`是一个延时函数，`prevCounter`是获取上一个最新的`counter`变量的值

**State 的一些注意事项：**

- 在重新渲染对象时，必须是要生成一个新的对象，如果直接修改旧的对象，React 不会重新渲染，这里有两种方法

  - 第一种方法：使用`Object.assign({},旧对象)`，将旧的对象拷贝到新对象中，再修改新对象的属性进行`setState`
  - 第二种方法：使用`...`展开运算符，例如：`setUser({...user, name: 'John', age: 20})`

  ```jsx
  const UpdateUserHandler = () => {
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
  ```

- `setState`是一个异步函数，就是它会在执行函数时先将要修改的`State`放入一个队列，然后继续往下执行，最后再从第一个开始重新渲染，所以一般重复渲染的话只会渲染最后一次

# 6. 获取原生 DOM

1. 使用传统的 `document` 对 DOM 进行操作

2. 直接从 React 处获取DOM对象

   1. 创建一个存储DOM对象的容器

      - 使用 useRef() 钩子函数
        1. React 中的钩子函数只能用于函数组件或自定义钩子
        2. 钩子函数只能直接在函数组件中使用

   2. 将容器设置为想要获取DOM对象元素的`ref`属性

      -- `<h1 ref={xxx}>...</h1>`

      - React 会自动将当前元素的 DOM 对象设置为容器 `current` 属性

```jsx
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
```

