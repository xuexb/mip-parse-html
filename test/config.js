/**
 * @file 默认参数测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const expect = require('chai').expect;
const config = require('../lib/config');

describe('config.js', () => {
    it('should be an object', () => {
        expect(config).to.be.a('object');
    });

    describe('.canonical', () => {
        it('should contain canonical', () => {
            expect(config).to.have.any.keys('canonical');
        });

        it('should be an string', () => {
            expect(config.canonical).to.be.a('string');
        });

        it('should not be empty', () => {
            expect(config.canonical).to.not.empty;
        });
    });

    describe('.miplink', () => {
        it('should contain miplink', () => {
            expect(config).to.have.any.keys('miplink');
        });

        it('should be an array', () => {
            expect(config.miplink).to.be.a('array');
        });

        it('should not be empty', () => {
            expect(config.miplink).to.not.empty;
        });
    });
});
