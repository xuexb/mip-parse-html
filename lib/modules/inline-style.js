/**
 * @file 处理标签中的内链 style 样式属性
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const random = require('../util').random;

// 前置操作，操作之后会被 ./style.js 处理掉
exports.level = -1;

exports.process = $ => {
    $('[style]').each((index, el) => {
        const $el = $(el);
        const style = $el.attr('style');

        // 有样式时才处理
        if (style) {
            const uid = $el.attr('id') || random();

            $el.before(`
                <style mip-auto>
                    #${uid} {
                        ${$el.attr('style')}
                    }
                </style>
            `);

            $el.attr('id', uid);
        }

        $el.removeAttr('style');
    });
};
