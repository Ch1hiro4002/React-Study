> 本篇笔记将开始着手创建并运行一个 React 项目

#  创建并运行 React 项目

​	常规的React项目需要使用`npm`(或`yarn`)作为包管理器来对项目进行管理。并且React官方为了方便我们的开发，为我们提供**react-scripts**包。包中提供了项目开发中的大部分依赖，大大的简化了项目的开发。

**开发步骤：**

1. 创建项目，目录结构如下：

   ```
   - 根目录
   	- public
   		- index.html（添加标签 <div id='root'></div>）
   	- src 
   		- App.js
   		- index.js
   ```

2. 进入项目所在目录，并执行命令 `npm init -y`或`yarn init -y`

3. 安装项目依赖，`npm install react react-dom react-scripts -S`或`yarn add react react-dom react-scripts`

4. 将 `react-scripts start` 设置到 `package.json` 的 **scripts** 选项中，然后通过 `npm start` 启动

   ```
   "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build"
   }
   ```

**编写js代码，进行测试：**、

```javascript
// src/index.js 是js的入口文件
// React18 后 react-dom 分为客户端和服务端，client 表示客户端
import ReactDOM from 'react-dom/client';

const App = <div>
    <h1>这是一个 React 项目！</h1>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);
```

**注意：**`import` 要求 `script`的`type = "module"`，在`package.json`中修改



