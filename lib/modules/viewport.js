/**
 * @file 处理 viewport
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    let $viewport = $('head > meta[name="viewport"]');

    if (!$viewport.length) {
        $viewport = $('<meta name="viewport">').insertBefore('head > title');
    }

    $viewport.attr('content', 'width=device-width,minimum-scale=1,initial-scale=1');
};
