/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import PropertyReaderInterface from "./property-reader-interface";

/**
 * @api
 */
export default class Paddings implements PropertyReaderInterface {
    /**
     * Read paddings from element with calculated value
     * Value to be read should be the second number in the equation
     * E.g. calc(50% + 40px)
     *
     * @param {HTMLElement} element
     * @returns {string | object}
     */
    public read(element: HTMLElement): string | object {
        const regex = /[+-]?\d+(?:\.\d+)?/g;
        return {
            padding: {
                left: element.style.paddingLeft.match(regex)[1] || element.style.paddingLeft,
                top: element.style.paddingTop.match(regex)[1] || element.style.paddingTop,
                right: element.style.paddingRight.match(regex)[1] || element.style.paddingRight,
                bottom: element.style.paddingBottom.match(regex)[1] || element.style.paddingBottom,
            },
        };
    }
}
