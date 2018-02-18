/*
 *  volume.js
 *
 *  David Janes
 *  IOTDB.org
 *  2016-02-05
 *
 *  Copyright [2013-2018] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

const imperial = [
    {
        from: 'iot-unit:volume.imperial.cup',
        to: 'iot-unit:volume.imperial.fluid-ounce',
        multiply: 8,
    },
    {
        from: 'iot-unit:volume.imperial.pint',
        to: 'iot-unit:volume.imperial.cup',
        multiply: 2,
    },
    {
        from: 'iot-unit:volume.imperial.pint',
        to: 'iot-unit:volume.imperial.gallon',
        multiply: .25,
    },
    {
        from: 'iot-unit:volume.imperial.pint',
        to: 'iot-unit:volume.imperial.gill',
        multiply: 4,
    },
    {
        from: 'iot-unit:volume.imperial.pint',
        to: 'iot-unit:volume.si.liter',
        multiply: 0.56826125,
    },
    {
        from: 'iot-unit:volume.imperial.tablespoon',
        to: 'iot-unit:volume.imperial.teaspoon',
        multiply: 3,
    },
    {
        from: 'iot-unit:volume.imperial.cup',
        to: 'iot-unit:volume.imperial.tablespoon',
        multiply: 16,
    },
    {
        from: 'iot-unit:volume.imperial.quart',
        to: 'iot-unit:volume.imperial.cup',
        multiply: 4,
    },
];

const us = [
    // US 
    {
        from: 'iot-unit:volume.us.cup',
        to: 'iot-unit:volume.us.fluid-ounce',
        multiply: 8,
    },
    {
        from: 'iot-unit:volume.us.pint',
        to: 'iot-unit:volume.us.dram',
        multiply: 128,
    },
    {
        from: 'iot-unit:volume.us.pint',
        to: 'iot-unit:volume.us.cup',
        multiply: 2,
    },
    {
        from: 'iot-unit:volume.us.pint',
        to: 'iot-unit:volume.us.gallon',
        multiply: .25,
    },
    {
        from: 'iot-unit:volume.us.pint',
        to: 'iot-unit:volume.us.gill',
        multiply: 4,
    },
    {
        from: 'iot-unit:volume.us.pint',
        to: 'iot-unit:volume.si.liter',
        multiply: .473176473,
    },
    {
        from: 'iot-unit:volume.us.tablespoon',
        to: 'iot-unit:volume.us.teaspoon',
        multiply: 3,
    },
    {
        from: 'iot-unit:volume.us.cup',
        to: 'iot-unit:volume.us.tablespoon',
        multiply: 16,
    },
    {
        from: 'iot-unit:volume.us.quart',
        to: 'iot-unit:volume.us.cup',
        multiply: 4,
    },
];

/**
 *  API
 */
exports.imperial = imperial;
exports.us = us;
