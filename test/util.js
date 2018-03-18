/**
 * @file 常用方法测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect;
const util = require('../lib/util');

describe('util.js', () => {
    describe('.isCDNpath()', () => {
        it('should return an boolean', () => {
            expect(util.isCDNpath()).to.be.a('boolean');
            expect(util.isCDNpath('string')).to.be.a('boolean');
            expect(util.isCDNpath('string', 'string')).to.be.a('boolean');
        });
        it('should work', () => {
            expect(util.isCDNpath('https://c.mipcdn.com/static/v1/mip.js', '/static/v1/mip.js')).to.be.true;
            expect(util.isCDNpath('//c.mipcdn.com/static/v1/mip.js', '/static/v1/mip.js')).to.be.true;
            expect(util.isCDNpath('//c.mipcdn.com/static/v1/mip.js?a=1#3', '/static/v1/mip.js')).to.be.true;
            expect(util.isCDNpath('https://mipcache.bdstatic.com/static/v1/mip.css', '/static/v1/mip.css')).to.be.true;
            expect(util.isCDNpath('//mipcache.bdstatic.com/static/v1/mip.css', '/static/v1/mip.css')).to.be.true;
        });
    });

    describe('.isCDN()', () => {
        it('should return an boolean', () => {
            expect(util.isCDN()).to.be.a('boolean');
            expect(util.isCDN('string')).to.be.a('boolean');
            expect(util.isCDN(null)).to.be.a('boolean');
        });
        it('should work', () => {
            expect(util.isCDN('https://c.mipcdn.com/static/v1/mip.js')).to.be.true;
            expect(util.isCDN('//c.mipcdn.com/static/v1/mip.js')).to.be.true;
            expect(util.isCDN('//c.mipcdn.com/static/v1/mip.js?a=1#3')).to.be.true;
            expect(util.isCDN('https://mipcache.bdstatic.com/static/v1/mip.css')).to.be.true;
            expect(util.isCDN('https://mipcache.bdstatic.com/static/v1/mip-fixed/mip-fixed.js')).to.be.true;
        });
    });

    describe('.random()', () => {
        it('should return an string', () => {
            expect(util.random()).to.be.a('string');
        });
        it('should begin with the letter m', () => {
            expect(util.random()).to.match(/^m/);
            expect(util.random()).to.match(/^m/);
            expect(util.random()).to.match(/^m/);
        });
        it('the length should be 6', () => {
            expect(util.random()).to.have.lengthOf(6);
            expect(util.random()).to.have.lengthOf(6);
            expect(util.random()).to.have.lengthOf(6);
        });
    });
});
