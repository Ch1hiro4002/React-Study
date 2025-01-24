> 从本篇开始一步一步认识并掌握React

# 1. React 简介

**React** 是一个用于构建用户界面的 **JavaScript** 库，用来为现代的网络构建用户界面

**React特点：**

- 虚拟 DOM
- 声明式
- 基于组件
- 支持服务端渲染

# 2. HelloWorld

使用**React**开发**Web**项目，需要引入两个**JS**脚本：

- `react.development.js`
  - **react** 是核心库，只要使用**react**就必须引用
  - 下载地址：https://unpkg.com/react@18.0.0/umd/react.development.js
- `react-dom.development.js`
  - **react-dom**是**react**的**dom**包，开发web项目时必须引用
  - 下载地址：https://unpkg.com/react-dom@18.0.0/umd/react-dom.development.js

下面通过**DOM**向页面添加一个`div`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HelloWorld</title>
</head>
<body>
    <div id="root"></div>

    <script>
        // 通过 DOM 添加一个 div
        // 创建 div，这里是一个 dom 元素
        const div = document.createElement('div');
        
        // 向 div 中添加内容
        div.innerText = '我是 div';
        
        // 获取 root
        const root = document.getElementById('root');
        
        // 将 div 添加到页面中
        root.appendChild(div);
    </script>
</body>
</html>
```

接着用**React**向页面添加一个`div`，进行对比，体会不同之处

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HelloWorld</title>
    <!-- 引入 React 核心库 -->
    <script src="script/react.development.js"></script>
    <!-- 引入 React DOM 库 （必须在核心库后引入） -->
    <script src="script/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        // 创建 div
        const div = React.createElement('div', {}, '我是 React 创建的 div');

        // 获取根元素 root
        const root = ReactDOM.createRoot(document.getElementById('root'));

        // 将 div 渲染到根元素
        root.render(div);
    </script>
</body>
</html>
```



# 3. 三个API

- **React.createElement()**
  - 用来创建一个 React 元素
  - React 元素无法修改
  - 需要三个参数：
    1. 元素名（html 标签必须小写）
    2. 元素的属性（对象类型）
       - class 属性需要用 className 设置
       - 在设置事件时，属性名需要修改成驼峰命名法，并且属性值是一个可调用的函数
    3. 元素的子元素（也可以是文本内容），元素名和文本用逗号隔开
  - 注意点：
    1. React 元素最终会通过虚拟DOM转换为真实DOM元素
    2. React 元素一旦创建无法修改，只能通过新创建的元素进行替换
- **ReactDOM.createRoot()**
  - 用来创建 React 根容器，容器可放置 React 元素
  - 需要一个 DOM 元素作为参数
- **root.render()**
  - 当首次调用时，容器节点里的 DOM 元素都会被替换，后续的调用会使用 React 的 DOM 差分算法**(diff算法)**进行更新（只会更新有变动的地方）
  - 不会修改容器的节点（只会修改子节点），可以在不覆盖现有子节点的情况下，将组件插入已有的 DOM 节点中
  - 需要一个 React 元素作为参数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>三个API</title>
    <script src="script/react.development.js"></script>
    <script src="script/react-dom.development.js"></script>
</head>
<body>
    <button id="btn">点击一下</button>
    <div id="root"></div>

    <script>
        // 创建 React 元素
        const button = React.createElement('button', {
            id: 'btn',
            className: 'button',
            onClick: () => {
                alert('点击成功！')
            }
        }, '按钮');

        const div = React.createElement('div', {}, '我是一个div', button);


        // 获取根元素
        const root = ReactDOM.createRoot(document.getElementById('root'));

        // 将 React 添加到根元素
        root.render(div);

        // 更新 button 元素中的内容
        const btn = document.getElementById('btn');
        
        btn.addEventListener('click', () => {
            const button = React.createElement('button', {
                id: 'btn',
                className: 'button',
                onClick: () => {
                    alert('点击成功！')
                }
            }, 'click me');

            const div = React.createElement('div', {}, '我是一个div', button);

            root.render(div);
        })

    </script>
</body>
</html>
```

# 4. JSX 简介与注意

JSX 是 JavaScript 的语法扩展，JSX 使得我们可以以类似于 HTML 的形式去使用 JS。JSX便是React中声明式编程的体现方式。

- **命令式编程：**通过编写过程得到结果
- **声明式编程：**直接给出想要的结果，原生Javascript不支持，需要用到 JSX

在 React 中使用 JSX 必须引入 babel 来完成 “ 翻译 ” 工作，即将 JSX 代码转换为 js 代码

引入**babel.min.js**，下载地址：https://unpkg.com/babel-standalone@6.26.0/babel.min.js

将`script`的`type`属性设置为`"text/babel"`，表明 js 代码被 babel 处理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSX</title>
    <script src="script/react.development.js"></script>
    <script src="script/react-dom.development.js"></script>
    <!-- 引入 babel.min.js -->
    <script src="script/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <!-- 设置js代码被babel处理 -->
    <script type="text/babel">
        
        // 命令式编程
        // const button = React.createElement('button', {}, '按钮');

        // 声明式编程
        const button = <button>按钮</button>;

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(button);

    </script>
</body>
</html>
```



**JSX 的注意事项：**

1. JSX 不是字符串，不能加引号
2. JSX 的 html 标签应该小写，React 组件应该大写开头
3. JSX 中只能有一个根标签
4. JSX 中可以使用 `{}` 嵌入表达式
   - 如果表达式是空值，布尔值、undefind这些值，将不会显示
5. JSX 中属性可以直接在标签中设置
   - class 需要用 className 代替
   - style 中必须使用对象设置，而且有些标签要用驼峰命名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSX</title>
    <script src="script/react.development.js"></script>
    <script src="script/react-dom.development.js"></script>
    <!-- 引入 babel.min.js -->
    <script src="script/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <!-- 设置js代码被babel处理 -->
    <script type="text/babel">

        const name = '孙悟空';
        const fn = () => {
            return 'Hello'
        };

        const div = <div 
            id ='home'
            className = 'divclass'
            style = {{background: 'red'}}
            >
            <ul>
                <li>无序列表</li>    
            </ul>    

            <input type="text" />

            <div>
                {name}
                <br/>
                {1 + 1}
                <br/>
                {fn()}
            </div>
        </div>;

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(div);

    </script>
</body>
</html>
```

# 5. 渲染列表

在学习列表渲染之前，先记住在 JSX 中`{}`只能放 js 代码，不能放语句（如 if 等），但是反过来是可行的

**举个例子：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>渲染列表</title>
    <script src="script/react.development.js"></script>
    <script src="script/react-dom.development.js"></script>
    <script src="script/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const name_cn = '李华';
        const name_en = 'LiHua';
        const lang = 'en';

        /* 
        *   {} 只能放Js表达式，不能放语句（如if）,反过来可行
        */

        let div;
    
        if(lang === 'en') {
            div = <div>Hello, {name_en}!</div>
        }else if(lang === 'cn') {
            div = <div>你好，{name_cn}!</div>
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(div);
    </script>
</body>
</html>
```

在上述代码中我们在 if 的判断中成功执行了 JSX 代码

下面就可以进一步了解如何渲染列表

**两种方式：**

1. **遍历**

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>渲染列表</title>
       <script src="script/react.development.js"></script>
       <script src="script/react-dom.development.js"></script>
       <script src="script/babel.min.js"></script>
   </head>
   <body>
       <div id="root"></div>
   
       <script type="text/babel">
           const data = ['孙悟空', '猪八戒', '沙和尚'];
   
           let arr = [];
   
           // 遍历数组
           for(let i = 0; i < data.length; i++) {
               arr.push(<li>{data[i]}</li>);
           };
   
           // JSX 会自动将数组中的元素展开
           const list = <ul>{arr}</ul>;
   
           const root = ReactDOM.createRoot(document.getElementById('root'));
   
           root.render(list);
       </script>
   </body>
   </html>
   ```

2. **使用 `map` 函数**

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>渲染列表</title>
       <script src="script/react.development.js"></script>
       <script src="script/react-dom.development.js"></script>
       <script src="script/babel.min.js"></script>
   </head>
   <body>
       <div id="root"></div>
   
       <script type="text/babel">
           const data = ['孙悟空', '猪八戒', '沙和尚'];
           
           // 使用 map 函数
           const arr = data.map((item) => {
               return <li>{item}</li>
           });
   
           // JSX 会自动将数组中的元素展开
           const list = <ul>{arr}</ul>;
   
           const root = ReactDOM.createRoot(document.getElementById('root'));
   
           root.render(list);
       </script>
   </body>
   </html>
   ```

   