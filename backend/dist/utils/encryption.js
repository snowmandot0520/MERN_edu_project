"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptRefreshToken = exports.createaRefreshToken = exports.decryptAccessToken = exports.createAccessToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../config/env");
if (!env_1.TOKEN_SECRET ||
    !env_1.ACCESS_TOKEN_EXPIRY ||
    !env_1.ACCESS_TOKEN_ALGO ||
    !env_1.REFRESH_TOKEN_EXPIRY ||
    !env_1.REFRESH_TOKEN_ALGO) {
    console.log('Please set JWT ENV variables');
    process.exit(-1);
}
var createAccessToken = function (data) {
    return (0, jsonwebtoken_1.sign)(data, process.env.TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        algorithm: process.env.ACCESS_TOKEN_ALGO,
    });
};
exports.createAccessToken = createAccessToken;
var decryptAccessToken = function (token) {
    return (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        algorithm: process.env.ACCESS_TOKEN_ALGO,
    });
};
exports.decryptAccessToken = decryptAccessToken;
var createaRefreshToken = function (data) {
    return (0, jsonwebtoken_1.sign)(data, process.env.TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        algorithm: process.env.REFRESH_TOKEN_ALGO,
    });
};
exports.createaRefreshToken = createaRefreshToken;
var decryptRefreshToken = function (token) {
    return (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        algorithm: process.env.REFRESH_TOKEN_ALGO,
    });
};
exports.decryptRefreshToken = decryptRefreshToken;
