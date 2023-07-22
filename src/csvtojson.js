"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = void 0;
var data = require("./dao/converted.json");
var getValue = function (address) {
    var sum = 0;
    var amount = 0;
    address = address.toUpperCase();
    data.forEach(function (item) {
        if (address === item["f-address"]) {
            sum +=
                ((Number(item["landprice"]) + Number(item["buildingprice"])) *
                    0.0676 *
                    Number(item["mill_levy"])) /
                    1000;
            amount++;
        }
    });
    return [sum, amount];
};
exports.getValue = getValue;
