/**
 * @file 默认参数测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect;
const ParseHTML = require('../../');

describe('modules/canonical.js', () => {
    it('options.canonical is null', () => {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
            </body>
            </html>
        `;

        expect(new ParseHTML(html, {
            canonical: null
        }).validate().status).to.equal('fail');
    });

    it('should be automatically inserted', () => {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
            </body>
            </html>
        `;

        expect(new ParseHTML(html, {
            canonical: 'https://xuexb.com'
        }).format()).to.be.string('https://xuexb.com');
    });
});
