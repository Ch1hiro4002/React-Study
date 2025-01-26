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

**注意：**在子组件中都要传入`props`参数

