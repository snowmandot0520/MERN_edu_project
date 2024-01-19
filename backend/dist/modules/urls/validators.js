"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateShortUrlRequest = void 0;
var express_validator_1 = require("express-validator");
var validateCreateShortUrlRequest = function () {
    return [
        (0, express_validator_1.body)('originalUrl', 'Original Url is required').isString()
    ];
};
exports.validateCreateShortUrlRequest = validateCreateShortUrlRequest;
