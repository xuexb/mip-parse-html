/**
 * @file 处理 <style> 标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    const styles = [];

    $('style')
        .filter((index, el) => Object.keys(el.attribs).indexOf('mip-officialrelease') < 0)
        .each((index, el) => {
            styles.push($(el).html());
            $(el).remove();
        });

    if (styles.length) {
        $('head').append(`
            <style mip-custom>
                ${styles.join('\n')}
            </style>
        `);
    }
};
