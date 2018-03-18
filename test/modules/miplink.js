/**
 * @file 默认参数测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect;
const ParseHTML = require('../../');

describe('modules/miplink.js', () => {
    it('should work', () => {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <a href="/ok"></a>
                <a href="/ok/2"></a>
                <a href="/error"></a>
                <a href="/"></a>
            </body>
            </html>
        `;

        expect(new ParseHTML(html, {
            miplink: [
                '/ok',
                /^\/ok/
            ]
        }).validate().status).to.equal('pass');

        expect(new ParseHTML(html, {
            miplink: [
                '/ok',
                /^\/ok/
            ]
        }).format().match(/data-type="mip"/g)).to.have.lengthOf(2);
    });
});
