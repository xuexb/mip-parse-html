/**
 * @file 处理核心 MIP 依赖注入
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const isCDNpath = require('../util').isCDNpath;

// 在删除无用 <script> 之后处理
exports.level = -3;

exports.process = $ => {
    // 注入 mip 属性
    $('html').attr('mip', '');

    // 注入 mip.css 引用
    const $link = $('head > link[rel="stylesheet"][href]')
        .filter((index, el) => isCDNpath($(el).attr('href'), '/static/v1/mip.css'));
    if (!$link.length) {
        $('head > title').after('<link rel="stylesheet" href="https://c.mipcdn.com/static/v1/mip.css">');
    }

    // 注入 mip.js 引用
    const $script = $('body script[src]')
        .filter((index, el) => isCDNpath($(el).attr('src'), '/static/v1/mip.js'));
    if (!$script.length) {
        $('body').append('<script src="https://c.mipcdn.com/static/v1/mip.js"></script>');
    }
};
