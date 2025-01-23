/*
*   - export(导出)：
*       - 默认导出：
*           export default a; 一个模块只能有一个默认导出
*       - 命名导出：
*           export const b = 20;
*           - 在声明时导出
*           export {obj, fn};
*           - 声明后导出
*
*   - import(导入)：
*       - 导入默认模块
*           import a from './06_module.js';
*           - 导入默认模块时，变量名可以自主指定，无需和模块中的变量名对应
*       - 导入命名模块
*           import {b, c} from './06_module.js';
*           import {b as hello, c} from './06_module.js';
*           - 可以用as指定命名
*/


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

