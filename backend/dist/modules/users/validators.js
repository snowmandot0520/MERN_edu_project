"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignInUserRequest = exports.validateCreateUserRequest = void 0;
var express_validator_1 = require("express-validator");
var validateCreateUserRequest = function () {
    return [
        (0, express_validator_1.body)('firstName', 'FirstName is required')
            .isString()
            .isLength({ min: 3 })
            .withMessage('FirstName must be at least 3 chars long'),
        (0, express_validator_1.body)('lastName', 'LastName is required')
            .isString()
            .isLength({ min: 3 })
            .withMessage('LastName must be at least 3 chars long'),
        (0, express_validator_1.body)('email', 'Email is required/invalid').isEmail(),
        (0, express_validator_1.body)('password', 'Password is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 chars long'),
    ];
};
exports.validateCreateUserRequest = validateCreateUserRequest;
var validateSignInUserRequest = function () {
    return [
        (0, express_validator_1.body)('email', 'Email is required/invalid').isEmail(),
        (0, express_validator_1.body)('password', 'Password is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 chars long'),
    ];
};
exports.validateSignInUserRequest = validateSignInUserRequest;
