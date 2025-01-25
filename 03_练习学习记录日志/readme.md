> 本篇笔记将开始着手创建并运行一个 React 项目，（学习记录网站）

#  1. 创建并运行 React 项目

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

**编写js代码，进行测试：**

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



# 2. 定义页面结构

按照以上步骤创建好**React**的项目结构，并在`package.json`中添加

```
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
```

这个配置参数可以增加代码提示

下面在`src/index.js`中定义页面的结构

![image-20250124222939222](https://oss-of-ch1hiro.oss-cn-beijing.aliyuncs.com/imgs/202501250934335.png)

```js
// src/index.js 是js的入口文件

import ReactDOM from 'react-dom/client';

const App = <div className='log'>
    {/* 日志项容器 */}
    <div className='item'>
        {/* 日期容器 */}
        <div className='data'>
            <div className='month'>
                一月
            </div>
            <div className='day'>
                24
            </div>
        </div>
        {/* 日志内容容器 */}
        <div className='content'>
            {/* 学习内容容器 */}
            <div className='study'>
                学习 React
            </div>
            {/* 学习时间容器 */}
            <div className='time'>
                20 天
            </div>
        </div>
    </div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);
```

# 3. 编写样式

一般都使用外联css文件的形式，进行样式修改

**这里记几个常用的属性：**

- **选择器**就是**className**，`'*'`就是对所有元素应用样式
- `margin`和`padding`分别指外边距和内边距
- `width`和`height`分别指宽度和高度
- `box-sizing: border-box;`：设置盒模型为`border-box`意味着元素的宽度和高度包括内边距和边框
- `font-family`：设置字体
- `background-color`：设置背景颜色
- `background-color`：设置边框的圆角半径
- `box-shadow`：添加阴影效果
- `display: flex`：启用弹性布局，使子元素灵活排列
- `font-weight`：设置字体粗细程度，常用**bold**
- `text-align`：设置文本内容的位置，常用**center**
- `overflow`：设置超出的部分，常用**hidden**隐藏
- `line-height`：设置行间距
- `color`：设置字体颜色
- `font-size`：设置字体大小

**最终效果图：**

![image-20250124232129149](https://oss-of-ch1hiro.oss-cn-beijing.aliyuncs.com/imgs/202501250934597.png)







