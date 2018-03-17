/**
 * @file 替换 <iframe> 为 <mip-iframe>
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = function ($, config) {
    const html = $('body')
        .html()
        .replace(/<iframe([^>]*)>([\s\S]*?)<\/iframe>/ig, (match, attrs, tags) => {
            return`<mip-iframe${attrs}>${tags}</mip-iframe>`;
        });
    $('body').html(html);
};
