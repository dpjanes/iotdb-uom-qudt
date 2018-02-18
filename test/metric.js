/*
 *  samples/km_in.js
 *
 *  David Janes
 *  IOTDB.org
 *  2016-02-04
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

const _ = require("iotdb-helpers")

const imperial = require("..")
imperial.load()

const assert = require("assert")

describe("km_in", function() {
    it("works", function() {
        const expected = 39370;
        const actual = _.convert.convert({
            from: 'iot-unit:length.si.meter.3', // m * 10^3 = km
            to: 'iot-unit:length.imperial.inch',
            value: 1
        });

        assert.deepEqual(actual, expected)
    })
})
