/**
 * @file 移除标签中禁用数性
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    $('*').each((index, el) => {
        Object.keys(el.attribs).forEach(attr => {
            if (/^on[a-z]+/i.test(attr)) {
                $(el).removeAttr(attr);
            }
        });
    });
};
