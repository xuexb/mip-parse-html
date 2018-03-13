# mip-parse-html
解析 HTML 代码为 MIP-HTML

[![NPM Version](https://img.shields.io/npm/v/mip-parse-html.svg)](https://www.npmjs.com/package/mip-parse-html)

## List

- [ ] 自动添加 `<html mip>` 属性
- [ ] 自动替换 `<img>` 标签为 `<mip-img>`
- [ ] 自动添加 `<noscript>` 标签
- [ ] 自动添加 `mip.css` 引用
- [ ] 自动添加 `mip.js` 引用
- [ ] 自动添加 `<meta name="viewport">` 标签
- [ ] 合并页面中多个 `<style>` 标签，并插入到 `<head>` 标签内的 `<style mip-custom>` 中
- [ ] 处理页面中的 `<a>` 标签，根据配置 `options.baseUrl` 自动处理是否添加 `data-type="mip"`
- [ ] 根据配置的 `options.canonical` 自动插入 `<link rel="canonical">` 标签
- [ ] 自动抽离元素中的 `style` 属性，并添加随机数前插到 `<style mip-custom>` 中
- [ ] 自动移除 `<script>` 、`<frame>` 、`<frameset>` 、`<object>` 、`<param> ` 、`<applet>` 、`<embed>` 标签
- [ ] 自动检测页面 MIP 组件，并处理引用对应的组件代码，移除没有使用的组件代码引用
- [ ] 自动替换页面中 `<video>` 为 `<mip-video>`
- [ ] 自动替换页面中 `<audio>` 为 `<mip-audio>`
- [ ] 自动替换页面中 `<iframe>` 为 `<mip-iframe>`
- [ ] 自动替换页面中 `<form>` 为 `<mip-form>`

## License
MIT
