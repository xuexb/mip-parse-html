/**
 * @file 替换 <video> 为 <mip-video>
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = function ($, config) {
    const html = $('body')
        .html()
        .replace(/<video([^>]*)>([\s\S]*?)<\/video>/ig, (match, attrs, tags) => {
            return`<mip-video${attrs}>${tags}</mip-video>`;
        });
    $('body').html(html);
};
