/*
 *  samples/metric.js
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

describe("imperial", function() {
    it("pound-kilogram", function() {
        const expected = 1.361
        const actual = _.convert.convert({
            from: "unit:PoundMass",
            to: "unit:Kilogram",
            value: 3,
        });

        assert.deepEqual(actual, expected)
    })
    it("pound-gram", function() {
        const expected = 1360.777
        const actual = _.convert.convert({
            from: "unit:PoundMass",
            to: "unit:Gram",
            value: 3,
        });

        assert.deepEqual(actual, expected)
    })
    it("carat-gram", function() {
        const expected = 3.2
        const actual = _.convert.convert({
            from: "unit:Carat",
            to: "unit:Gram",
            value: 16,
        });

        assert.deepEqual(actual, expected)
    })
})
