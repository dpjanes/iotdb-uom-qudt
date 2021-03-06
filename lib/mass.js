/*
 *  lib/mass.js
 *
 *  David Janes
 *  IOTDB.org
 *  2018-02-18
 *
 *  Copyright [2013-2020] David P. Janes
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

const metric = [
    {
        from: "qudt:Gram",
        to: "unit:Gram",
        multiply: 1,
    },
    {
        from: "unit:Kilogram",
        to: "unit:Gram",
        multiply: 1000,
    },
];

const imperial = [
    {
        from: "unit:PoundMass",
        to: "unit:Kilogram",
        multiply: 0.45359237,
    },
    {
        from: "unit:Gram",
        to: "unit:Carat",
        multiply: 5,
    },
    {
        from: "unit:Carat",
        to: "unit:CARAT",
        multiply: 1,
    },
    {
        from: "unit:PoundMass",
        to: "unit:Gram",
        multiply: 453.592,
    },
];


/**
 *
 *  API
 */
exports.imperial = imperial;
exports.metric = metric;
