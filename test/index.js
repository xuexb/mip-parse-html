/**
 * @file 入口文件测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect
const ParseHTML = require('../lib/index');

describe('index.js', () => {
    describe('.html()', () => {
        it('should return an string', () => {
            expect(new ParseHTML('<div></div>').html()).to.be.a('string');
        });

        it('should work', () => {
            expect(new ParseHTML('<div>1</div>').html()).to.have.string('<div>1</div>');
        });
    });

    describe('.format()', () => {
        it('should return an string', () => {
            expect(new ParseHTML('<input value="1">').format()).to.be.a('string');
        });

        it('should work', () => {
            expect(new ParseHTML('<input value="1">').format()).to.have.string('<input value="1">');
        });
    });

    describe('.validate()', () => {
        it('should return an object', () => {
            expect(new ParseHTML('<div></div>').validate()).to.be.a('object').and.to.have.all.keys('status', 'errors');
        });

        it('the return parameter status should be a string', () => {
            expect(new ParseHTML('<div></div>').validate().status).to.be.a('string').and.to.equal('fail');
        });

        it('the return parameter errors should be a array', () => {
            expect(new ParseHTML('<div></div>').validate().errors).to.be.a('array').and.to.not.empty;
        });

        it('should work', () => {
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Hello World</title>
                </head>
                <body>
                </body>
                </html>
            `;
            expect(new ParseHTML(html).validate()).to.deep.equal({
                status: 'pass',
                errors: []
            });
        });
    });

    it('should not be empty', () => {
        expect(() => {
            new ParseHTML();
        }).to.throw();
    });

    it('should be an string', () => {
        expect(() => {
            new ParseHTML({});
        }).to.throw();
    });

    it('should be a constructor', () => {
        expect(new ParseHTML('string')).to.be.an.instanceof(ParseHTML);
    });
});
