/**
 * @file 移除多个 <base>
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    $('base').each((index, el) => {
        if (index > 0) {
            $(el).remove();
        }
    });
};
