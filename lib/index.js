/**
 * @file 入口文件
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const cheerio = require('cheerio');
const htmlcs = require('htmlcs');
const minify = require('html-minifier').minify;
const validator = require('mip-validator')();

const load = require('./load');
const config = require('./config');

class ParseHTML {

    /**
     * 构造函数
     *
     * @param  {string} content 源代码
     * @param  {Object|Undefined} opts    配置数据
     */
    constructor(content, opts) {
        if (!content) {
            throw new TypeError('new ParseHTML() cannot be empty');
        }
        else if ('string' !== typeof content) {
            throw new TypeError('new ParseHTML(content) should an string');
        }

        const modules = load();
        let $ = this.$ = cheerio.load(content, ParseHTML.cheerioOptions);

        opts = Object.assign({}, config, opts);

        modules.forEach(item => {
            const doc = item.process($, opts);

            if (doc) {
                $ = this.$ = doc;
            }
        });
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
            minifyCSS: true
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

    /**
     * 输出解析结果
     *
     * @return {Object} 结果数据 {status, errors}
     */
    validate() {
        const errors = validator.validate(this.format());
        return {
            status: !errors.length ? 'pass' : 'fail',
            errors
        };
    }
}

/**
 * cheerio 配置
 *
 * @type {Object}
 */
ParseHTML.cheerioOptions = {
    decodeEntities: false
};

module.exports = ParseHTML;
