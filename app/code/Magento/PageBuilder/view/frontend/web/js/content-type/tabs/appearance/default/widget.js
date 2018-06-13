define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    return function (config, element) {
        var $element = $(element);

        // Disambiguate between the mage/tabs component which is loaded randomly depending on requirejs order.
        $.ui.tabs({
            active: $element.data('activeTab') || 0,
            create:
                /**
                 * Adjust the margin bottom of the navigation to correctly display the active tab
                 */
                function () {
                    var borderWidth = parseInt($element.find('.tabs-content').css('borderWidth').toString(), 10);

                    $element.find('.tabs-navigation').css('marginBottom', -borderWidth);
                    $element.find('.tabs-navigation li:not(:first-child)').css('marginLeft', -borderWidth);
                }
        }, element);
    };
});
