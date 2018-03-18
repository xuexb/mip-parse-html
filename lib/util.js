/**
 * @file 常用方法
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const url = require('url');
const cryptoRandomString = require('crypto-random-string');

/**
 * 是否为 MIP-CDN 路径的链接
 *
 * @param  {string} str  检查字符
 * @param  {string} path 目标路径
 *
 * @return {boolean}
 */
exports.isCDNpath = (str, path) => {
    if ('string' !== typeof str || !exports.isCDN(str)) {
        return false;
    }
    if (str.substr(0, 2) === '//') {
        str = `https:${str}`;
    }
    return url.parse(str).pathname === path;
};

/**
 * 是否为 MIP-CDN 链接
 *
 * @param  {string} str  检查字符
 *
 * @return {boolean}
 */
exports.isCDN = str => /^(https:)?\/\/(c\.mipcdn\.com|mipcache\.bdstatic\.com)(\/|$)/.test(str);

/**
 * 获取随机字符
 *
 * @return {string}
 */
exports.random = () => `m${cryptoRandomString(5)}`;

/**
 * 注入组件 JS 脚本
 *
 * @param  {Object} $    文档对象
 * @param  {string} name 组件名
 */
exports.insertExtensions = ($, name) => {
    const $script = $('body script[src]')
        .filter((index, el) => exports.isCDNpath($(el).attr('src'), `/static/v1/${name}/${name}.js`));

    if (!$script.length) {
        $('body').append(`<script src="https://c.mipcdn.com/static/v1/${name}/${name}.js"></script>`);
    }
};
