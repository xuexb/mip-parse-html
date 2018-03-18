/**
 * @file 自动处理 MIP 中跳转链接
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = ($, config) => {
    const filter = url => {
        return url && config.miplink.some(item => {
            if (item instanceof RegExp) {
                return item.test(url);
            }
            return item === url;
        });
    };

    $('a').each((index, el) => {
        const $el = $(el);
        const href = $el.attr('href');

        if (filter(href)) {
            $el.attr('data-type', 'mip');
        }
    });

    $('a[href="javascript"], a[href="javascript:"], a[href="javascript:;"]').attr('href', '#');
};
