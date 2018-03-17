/**
 * @file 入口文件
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const cheerio = require('cheerio');
const htmlcs = require('htmlcs');
const minify = require('html-minifier').minify;
const load = require('./load');
const config = require('./config');

class ParseHTML {

    /**
     * 构造函数
     *
     * @param  {string} content 源代码
     * @param  {Object|Undefined} opts    配置数据
     *
     * @return {self}
     */
    constructor(content, opts) {
        const modules = load();
        const $ = this.$ = cheerio.load(content);

        opts = Object.assign({}, config, opts);

        modules.forEach(it => it.process($, opts));
    }

    /**
     * 输出处理之后的压缩代码
     *
     * @return {string}
     */
    html() {
        return minify(this.$.html(), {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeRedundantAttributes: true,
            removeComments: true,
            removeAttributeQuotes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
        });
    }

    /**
     * 输出处理之后的格式化代码
     *
     * @return {string}
     */
    format() {
        return htmlcs.format(this.$.html());
    }
}

module.exports = ParseHTML;
