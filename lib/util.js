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
exports.isCDNpath = (str, path) => exports.isCDN(str) && url.parse(str).pathname === path;

/**
 * 是否为 MIP-CDN 链接
 *
 * @param  {string} str  检查字符
 *
 * @return {boolean}
 */
exports.isCDN = str => /(https:)?\/\/(c\.mipcdn\.com|mipcache\.bdstatic\.com)(\/|$)/.test(str);

/**
 * 获取随机字符
 *
 * @return {string}
 */
exports.random = () => `m${cryptoRandomString(5)}`;
