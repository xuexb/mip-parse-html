/**
 * @file 默认参数测试
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const path = require('path');
const mock = require('mock-require');
const expect = require('chai').expect;

describe('load.js', () => {
    afterEach(() => {
        // 清空缓存
        delete require.cache[path.resolve(__dirname, '../lib/load.js')];
        mock.stop('require-dir');
    });

    it('should be an array', () => {
        mock('require-dir', () => {
            return {};
        });

        const load = require('../lib/load');
        expect(load()).to.be.a('array');
    });

    describe('modules', () => {
        it('should contain exports.process', () => {
            mock('require-dir', () => {
                return {
                    key1: {},
                    key2: {
                        process() {}
                    }
                };
            });

            const load = require('../lib/load');
            expect(load()).to.have.lengthOf(1);
        });

        it('should be a method function', () => {
            mock('require-dir', () => {
                return {
                    key1: {
                        process: true
                    },
                    key2: {
                        process() {}
                    }
                };
            });

            const load = require('../lib/load');
            expect(load()).to.have.lengthOf(1);
        });

        it('exports.level is 0 by default', () => {
            mock('require-dir', () => {
                return {
                    key1: {
                        process() {}
                    },
                    key2: {
                        level: 1,
                        process() {}
                    }
                };
            });

            const load = require('../lib/load');
            expect({
                result: load()
            }).to.nested.include({
                'result[0].level': 0,
                'result[1].level': 1
            });
        });

        it('should work', done => {
            mock('require-dir', () => {
                return {
                    key1: {
                        process() {
                            done();
                        }
                    },
                    key2: {
                        level: 1,
                        process() {}
                    },
                    key3: {
                        level: -1,
                        process() {}
                    }
                };
            });

            const load = require('../lib/load');
            expect({
                result: load()
            }).to.nested.include({
                'result[0].level': -1,
                'result[1].level': 0,
                'result[2].level': 1
            });

            load()[1].process();
        });
    });
});
