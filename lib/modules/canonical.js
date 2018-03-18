/**
 * @file 处理 canonical
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = ($, config) => {
    if (!config.canonical) {
        return;
    }

    let $canonical = $('head > link[rel="canonical"]');

    if (!$canonical.length) {
        $canonical = $('<link rel="canonical">').insertAfter('head > title');
    }
    else if ($canonical.length > 1) {
        $canonical.each((index, el) => {
            if (index > 0) {
                $(el).remove();
            }
        });
    }

    $canonical.attr('href', config.canonical);
};
