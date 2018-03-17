/**
 * @file 加载功能模块
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const requireDir = require('require-dir');

module.exports = () => {
    const modules = requireDir('./modules');
    return Object
        .values(modules)
        .filter(it => 'function' === typeof it.process)
        .map(it => {
            if (it.level === undefined) {
                it.level = 0;
            }
            return it;
        })
        .sort((a, b) => a.level > b.level ? 1 : -1);
};