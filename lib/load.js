/**
 * @file 加载功能模块
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const requireDir = require('require-dir');

module.exports = () => {
    const modules = requireDir('./modules');
    return Object
        .keys(modules)
        .map(key => modules[key])
        .filter(item => 'function' === typeof item.process)
        .map(item => {
            if (item.level === undefined) {
                item.level = 0;
            }
            return item;
        })
        .sort((a, b) => a.level > b.level ? 1 : -1);
};
