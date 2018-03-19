/**
 * @file 删除 <link rel="miphtml"> 标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    $('link[rel="miphtml"]').remove();
};
