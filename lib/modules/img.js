/**
 * @file 替换 <img> 为 <mip-img>
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = function ($, config) {
    const html = $('body')
        .html()
        .replace(/<img(>|\s+>)/g, '')
        .replace(/<img\s+([^>]+)\/?>/ig, (match, attrs) => `<mip-img ${attrs}></mip-img>`);
    $('body').html(html);
};
