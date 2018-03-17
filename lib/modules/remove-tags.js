/**
 * @file 移除禁用标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = $ => {
    $('frame, frameset, object, param, applet, embed').remove();
};
