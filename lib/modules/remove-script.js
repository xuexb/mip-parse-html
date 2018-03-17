/**
 * @file 移除 <script> 标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const isCDN = require('../util').isCDN;

exports.process = $ => {
    $('script').each((index, el) => {
        const $el = $(el);
        const src = $el.attr('src');
        let remove = false;

        if (!src || !isCDN(src)) {
            remove = true;
        }

        if (remove) {
            $el.remove();
        }
    });
};
