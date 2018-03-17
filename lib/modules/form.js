/**
 * @file 替换 <form> 为 <mip-form> ，并替换 action 为 url
 * @author xuexb <fe.xiaowu@gmail.com>
 */

'use strict';

exports.process = function ($, config) {
    // 先替换属性
    $('body form').each((index, el) => {
        const $el = $(el);

        $el.attr('url', $el.attr('action'));

        $el.removeAttr('action');
    });

    const html = $('body')
        .html()
        .replace(/<form([^>]*)>([\s\S]*?)<\/form>/ig, (match, attrs, tags) => {
            return`<mip-form${attrs}>${tags}</mip-form>`;
        });
    $('body').html(html);
};
