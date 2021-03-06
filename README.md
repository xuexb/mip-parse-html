# mip-parse-html

解析 HTML 代码为 MIP-HTML

[![NPM Version](https://img.shields.io/npm/v/mip-parse-html.svg)](https://www.npmjs.com/package/mip-parse-html)
![node version required](https://img.shields.io/badge/node-%3E=4.0.0-green.svg)
[![build status](https://img.shields.io/travis/xuexb/mip-parse-html/master.svg)](https://travis-ci.org/xuexb/mip-parse-html)
[![test coverage](https://img.shields.io/coveralls/xuexb/mip-parse-html/master.svg)](https://coveralls.io/r/xuexb/mip-parse-html?branch=master)

## 使用

安装：
```bash
npm install mip-parse-html
```

解析：
```js
const ParseHTML = require('mip-parse-html');

// 配置参数
const options = {};

// 解析
const parse = new ParseHTML(content, options);

// 输出解析后的格式化代码
const html = parse.format();

// 输出解析后的压缩代码
const minhtml = parse.html();

// 输出解析后的验证结果，代码是基于 format 方法验证
// {
//     status: 'pass',// 或者 fail
//     errors: []
// }
const result = parse.validate();
```

## 配置

名称 | 说明 | 类型 | 默认值
--- | --- | --- | ---
`canonical` | 插入页面的 `<link rel="canonical" href="">`<br>如果为 `null` 则不处理 | `string`、`null` | `'https://www.mipengine.org/'`
`miplink` | 自动处理添加 `data-type="mip"` 链接的配置列表 | `Array.string`、`Array.RegExp` | `[/^\/(?!\/)/]`<br>（处理以 `/` 开始的链接）

## 功能列表

- [x] 自动修正 `<!doctype html>` 文档头，目前支持 `未定义`、`HTML4.1`、`HTML5` 的修正
- [x] 自动添加 `<html mip>` 属性
- [x] 自动添加 `<noscript>` 标签
- [x] 自动添加 `mip.css` 引用
- [x] 自动添加 `mip.js` 引用
- [x] 自动添加 `<meta name="viewport">` 标签
- [x] 自动删除元素上 `onxxx=""` 事件属性
- [x] 合并页面中多个 `<style>` 标签，并插入到 `<head>` 标签内的 `<style mip-custom>` 中
- [x] 处理页面中的 `<a>` 标签，根据配置 `options.miplink` 自动处理是否添加 `data-type="mip"`
- [x] 根据配置的 `options.canonical` 自动插入 `<link rel="canonical">` 标签
- [x] 自动抽离元素中的 `style` 属性，并添加随机数前插到 `<style mip-custom>` 中
- [x] 自动移除 `<script>` 、`<frame>` 、`<frameset>` 、`<object>` 、`<param> ` 、`<applet>` 、`<embed>` 标签
- [x] 自动替换页面中 `<img>` 标签为 `<mip-img>`
- [x] 自动替换页面中 `<video>` 为 `<mip-video>`
- [x] 自动替换页面中 `<audio>` 为 `<mip-audio>`
- [x] 自动替换页面中 `<iframe>` 为 `<mip-iframe>`
- [x] 自动替换页面中 `<form>` 为 `<mip-form>`

## 声明

该模块（[mip-parse-html](https://github.com/xuexb/mip-parse-html)）是显式的将明显的错误进行处理，但处理后不一定完全符合 [MIP-HTML 规范](https://www.mipengine.org/doc/2-tech/1-mip-html.html)，并且处理之后可能导致页面中部分功能缺失（如被删除的 JS 代码功能、自动处理的样式可能存在问题），请按需修改。

## License
MIT
