> 在学习 React 之前，先回顾了解一些JavaScript基础

# 1. 变量的声明

在**JavaScript**中有三种声明方式：

1. **var：**没有块级作用域，声明的变量都是全局变量，不推荐使用
2. **let：**有块级作用域，能够区分全局变量和局部变量
3. **const：**有块级作用域，声明的一般是常量，可以用于声明对象和函数，推荐使用

总结一句话，优先使用**const**，希望变量被修改就使用**let**



# 2. 解构赋值

​	解构赋值有两种：

1. **数组解构：**

   ```js
   <script>
       const arr = ['孙悟空', '猪八戒', '唐僧', '沙和尚'];
       const [a, b] = arr; 
       console.log(a, b);
       // 孙悟空 猪八戒
   
       const [a, b,  , c] = arr;
       console.log(a, b, c);
       // 孙悟空 猪八戒 沙和尚，用空跳过元素
   
       const [a, b, ...c] = arr;
       console.log(a, b, c);
       // 孙悟空 猪八戒 [唐僧, 沙和尚]，'...变量'代表将剩余变量全部赋值
   </script>
   ```

2. **对象结构：**

   ```js
   <script>
       const obj = {name: '孙悟空', age: 18, gender: '男'};
   
       const {name: a, age: b, gender: c} = obj;
       console.log(a, b, c);
   
       const {name, age, gender} = obj;
       console.log(name, age, gender);
   
   </script>
   ```

   **注意：**如果被赋值的变量与对象中的属性名相同即可省略



了解完解构赋值，可以使用它来完成变量交换

```js
<script>
	let a = 10, b = 20;
    [a, b] = [b, a];
    console.log(a, b);
	// 输出 20 10

    arr = [1, 3, 2];
    [arr[1], arr[2]] = [arr[2], arr[1]];
    console.log(arr);
	// 输出 [1, 2, 3]
</script>
```

# 3. 展开

可以通过`'...'`将数组或对象中的属性展开，展开后会分别赋值给变量

```js
<script>
    function add(a, b ,c) {
        return(a + b + c)
    }

    const arr = [1, 2, 3];
    console.log(add(...arr));   // 输出 6

    const arr2 = [...arr];
    console.log(arr2);  // 将arr的值先复制给arr2

    const obj = {
        name: '孙悟空',
        age: 18,
        gender: '男'
    };

    const obj2 = {...obj};
    console.log(obj2);  // 将obj的值浅赋值给obj2
</script>
```

# 4. 箭头函数

箭头函数是传统函数的简化方式，但是也带来一些限制导致有的场景无法使用

**箭头函数的认识：**

- 只有一个参数的函数
  - 参数 => 返回值
- 如果没有参数或有多个参数需要使用括号
  - () => 返回值
  - (a, b) => 返回值
- 返回值必须是表达式（有值的语句）
  - 如果返回值是对象，需要加小括号
- 如果需要在箭头函数中定义逻辑，可以直接在箭头后面跟代码块
  - (a, b) => {  }

```js
<script>
    const fn = function (a) {
        return a;
    };


    const fn2 = a => a;
    console.log(fn2('Hello'));


    const sum = (a, b) => a + b;
    console.log(sum(1, 2));


    const max = (a, b) => {
        if(a > b) {
            return a;
        }else {
            return b;
        }
    }
    console.log(max(1, 2));

</script>
```

**箭头函数的特点：**

1. 箭头函数没有arguments，但是可以用 '...'
2. 箭头函数没有自己的this
   - 它的this总是指向外层作用域的this
3. 箭头函数的this无法通过call()、apply()、bind()修改
4. 箭头函数无法作为构造函数使用，即不能被new

```js
<script>
    function fn1() {
        // arguments 用来保存函数的实参
        console.log(arguments.length); 
    }
    fn1(1, 2, 3); // 3

    function fn2(a, b, ...args) {
        console.log(args); 
    }
    fn2(1, 2, 3, 4, 5); // [3, 4, 5]

    const fn3 = (a, ...args) => {
        console.log(args);
    };
    fn3(1, 2, 3);   // [2, 3]




    const fn4 = () => {
        console.log(this);
    };
    fn4();  // Window

    const obj1 = {
        hello: () => {
            console.log(this);
        }
    };
    obj1.hello();   // Window

    const obj2 = {
        hello: function() {
            console.log(this);
        }
    };
    obj2.hello();   // Object

    const obj3 = {
        hello: function() {
            const world = () => {
                console.log(this);
            };

            world();
        }
    };
    obj3.hello();   // Object

</script>
```

# 5. 模块化

**模块化：**随着项目的代码越来越多，将大的项目拆分成一个一个小的模块，方便代码和功能的管理

**模块化系统：**`CommonJS`、`AMD`、`ReauireJS`等，在这之后官方推出了**ES6**模块方案，分为`export`和`import`

在创建**JS**模块时，通过`export`向模块外部暴露内容，在其他模块通过`import`引入内容

## export（导出）

**export导出方式有两种：**

1. **默认导出：**
   - `export default a;`，一个模块中只能有一个默认导出
2. **命名导出：**
   - `export const b = 20;`，在声明时导出
   - `export {obj, fn};`，声明后导出

## import（导入）

**import导入方式有两种：**

1. **导入默认模块：**
   - `import a from './06_module.js';`，导入默认模块时，变量名可以自主指定，无需和模块中的变量名对应
2. **导入命名模块：**
   - `import {b, c} from './06_module.js';`，与导入默认模块不同的是要加上大括号，不管有一个导入模块
   - `import {b as hello, c} from './06_module.js';`，可以用**as**指定命名

- **06_模块化.html**

```js
<!-- 
    默认情况下，script标签不能使用import语句
        如果想让其支持模块化，必须设置script的type属性为module
 -->

<script type="module">
    import a from './06_module.js';
    console.log(a);

    import {b as hello, c, obj, fn} from './06_module.js';
    console.log(hello, c, obj);
</script>
```

- **06_module.js**

```js
const a = 10;
export const b = 20;
export const c = 30;

const obj = {
    name: '孙悟空'
};

const fn = () => {
    console.log('我是模块内的函数')
};


export {obj, fn};

export default a;
```

# 6. 类（Class）

**类的定义：**

​	类是对象的模板，类中定义了对象中包含了那些属性和方法

**类的创建：**

​	类可以通过**class**关键字创建，同时可以通过`function`创建

**类的属性有两种：**

1. **直接定义：**`name = '孙悟空';`，不灵活
2. **通过构造函数赋值：**`constructor(name) {this.name = name;}`，因为new一个对象时相当于调用了`constructor()`构造函数

```js
<script>
    class Person {
        // 定义属性
        // name = '孙悟空';
        // age = 18;

        // 定义构造函数
        // 当new一个对象时都会调用constructor函数
        constructor(name, age) {
            // 将参数赋值给对象的属性，在构造函数中，可以通过this来引用当前的对象
            this.name = name;
            this.age = age;
        }

        // 定义实例方法
        run() {
            console.log('我正在跑步！');
        }
    }

    const per1 = new Person('孙悟空', 18);
    const per2 = new Person('猪八戒', 20);
    console.log(per1);   
    console.log(per2); 
    console.log(per1 === per2); // false，说明这是两个不同的对象
    per1.run();
</script>
```

**类的继承：**

​	**定义：**使用`extends`来继承一个类，使的类中获取到父类中的属性和方法

```js
<script>
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        cry = () => {
            console.log('动物的叫声');
        }
    }

    class Dog extends Animal {
        // 当在子类中重写父类的构造函数时，必须在子类构造函数中调用父类的构造函数
        constructor(name, age, weight) {
            super(name, age);    // 调用父类的构造函数
            this.weight = weight;
        }

        // 子类继承父类后将获得父类中的所有属性和方法，也可以创建同名属性或方法来对父类进行重写
        cry = () => {
            console.log('汪汪汪！');
        }
    }

    const dog = new Dog('大黄', 3, 25);
    console.log(dog.name, dog.age, dog.weight); // 大黄 3 25
    dog.cry();  // 汪汪汪！
</script>
```

**静态属性和方法：**

​	**定义：**直接通过类调用的属性和方法称为静态属性和静态方法

​	**写法：**在属性或方法前加上`static`静态关键字

​	**注意：**静态方法中的`this`指的是**Class**，不是**Object**

```js
<script>
    class MyClass { 
        // static 关键字声明静态属性和方法
        static name = '孙悟空';

        static fn = () => {
            console.log('我是静态方法！');
        }
    }

    console.log(MyClass.name);
    MyClass.fn();
</script>
```

# 7. 数组的方法

这里介绍四种方法：

- **map()：**
  - 需要一个回调函数作为参数，回调函数的返回值会成为一个新数组中的元素
  - 回调函数有三个参数：
    1. 当前的元素
    2. 当前元素的索引
    3. 当前数组

```js
<script>
    const arr1 = ['孙悟空', '猪八戒', '唐僧'];

    let result = arr1.map((item, index, array) => {
        console.log(item, index, array);

        return "<li>" + item + "</li>"
    });

    console.log(result);    // 会输出一个新数组
</script>
```

- **filter()：**
  - 可以从一个数组中获取符合条件的元素
  - 根据回调函数的结果来决定是否保留元素，true保留，false不保留

```js
<script>
    const arr2 = [1, 2, 3, 4, 5];

    result = arr2.filter(item => {
        return item % 2 === 0;
    });

    console.log(result);    // 输出 [2, 4]
</script>
```

- **find()：**
  - 可以从一个数组中获取符合条件的第一个元素

```js
<script>
    const arr2 = [1, 2, 3, 4, 5];

    result = arr2.find(item => {
        return item % 2 === 0;
    });

    console.log(result);    // 输出 2
</script>
```

- **reduce()：**
  - 可以用来整合数组中的元素
  - 需要两个参数：
    1. 回调函数（包含四个参数）
       1. prev 上一次的运算结果
       2. curr 当前值
       3. index 当前索引
       4. arr 当前数组
    2. 初始值
       - 指定第一次运算的prev，如果不指定直接从第二个元素开始计算

```js
<script>
    result = arr2.reduce((prev, curr, index, array) => {
        console.log(prev, curr, index, array);
        return (prev + curr)
    }, 0);

    console.log(result);
</script>
```

