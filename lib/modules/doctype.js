/**
 * @file 处理 doctype
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

const ParseHTML = require('../../');

// 文档头处理应该最优先
exports.level = -10;

exports.process = $ => {
    let html = $.root().html();

    if (!/[\n\s\r]*<\!DOCTYPE\s+html/i.test(html)) {
        html = `<!DOCTYPE html>${html}`;
    }
    else {
        html = html.replace(/<\!DOCTYPE\s+html[^>]*>/i, '<!DOCTYPE html>');
    }

    return $.load(html, ParseHTML.cheerioOptions);
};
