/**
 * @file 处理 <head> 中必须有一个字符编码标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    let $charset = $('head > meta[charset]');

    if (!$charset.length) {
        $charset = $('<meta charset>').prependTo('head');
    }

    $charset.attr('charset', 'UTF-8');
};
