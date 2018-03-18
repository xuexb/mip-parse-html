/**
 * @file 入口文件测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const expect = require('chai').expect;
const ParseHTML = require('../');

describe('cases', () => {
    const data = glob
        .sync('cases/**/*.html', {
            cwd: __dirname
        })
        .map(uri => {
            const html = fs.readFileSync(path.resolve(__dirname, uri)).toString();

            return {
                uri,
                path: uri,
                html,
                title: (html.match(/<title>(.+?)<\/title>/) || ['', uri])[1]
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/, '>')
                    .replace(/&quot;/g, '"')
            };
        });

    data.forEach(item => {
        it(item.title, () => {
            expect(new ParseHTML(item.html).validate().status).to.equal('pass', `${item.uri} should pass`);
        });
    });
});
