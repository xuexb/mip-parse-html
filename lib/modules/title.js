/**
 * @file 处理 <head> 中必须有一个 <title> 标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

// 优先处理 <title> 元素，因为后续有一些依赖要根据 <title> 标签去插入
exports.level = -10;

exports.process = $ => {
    if ($('head > title').length) {
        return;
    }

    $('head').append('<title>hello MIP</title>');
};
