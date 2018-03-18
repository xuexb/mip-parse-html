/**
 * @file 替换 <audio> 为 <mip-audio>
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const util = require('../util');

exports.process = function ($, config) {
    const html = $('body')
        .html()
        .replace(/<audio([^>]*)>([\s\S]*?)<\/audio>/ig, (match, attrs, tags) => {
            return`<mip-audio${attrs}>${tags}</mip-audio>`;
        });
    $('body').html(html);

    if ($('mip-audio').length) {
        util.insertExtensions($, 'mip-audio');
    }
};
