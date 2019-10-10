/**
 * Copyright © MageSpecialist - Skeeller srl. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'tinyslider'
], function () {
    'use strict';

    return function (config, elem) {
        config['container'] = elem;// jscs:ignore requireDotNotation

        // eslint-disable-next-line no-undef
        return tns(config);
    };
});
