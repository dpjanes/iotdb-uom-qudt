/*
 *  lib/distance.js
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
        from: "unit:Kilometer",
        to: "unit:Meter",
        multiply: 1000,
    },
];

const imperial = [
    {
        from: "unit:Foot",
        to: "unit:Meter",
        multiply: 0.3048,
    },
    {
        from: "unit:MileInternational",
        to: "unit:Meter",
        multiply: 1609.344,
    },
];

/**
 *
 *  API
 */
exports.imperial = imperial;
exports.metric = metric;

