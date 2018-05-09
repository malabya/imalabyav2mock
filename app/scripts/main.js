$(document).foundation();

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        let $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top + 100,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        console.log(viewTop);
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };


    $(window).scroll(function (event) {

        $('.animation-block').each(function (i, el) {
            let el = $(el);
            if (el.visible(true)) {
                el.removeClass('not-loaded');
                el.addClass('loaded');
            }
        });

    });
})(jQuery);

