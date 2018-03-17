/**
 * @file 插入 <noscript> 标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

// 后置处理
exports.level = 10;

exports.process = $ => {
    // 删除所有 <noscript> 标签
    $('noscript').remove();

    // 插件新的标签
    $('head').append(`
        <noscript>
            <style mip-officialrelease>
                body {
                    -webkit-animation: none;
                       -moz-animation: none;
                        -ms-animation: none;
                            animation: none;
                }
            </style>
        </noscript>
    `);
};
