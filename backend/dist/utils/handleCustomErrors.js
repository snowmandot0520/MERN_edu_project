"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractErrors = exports.handleCustomError = void 0;
var responseMessages_1 = require("../constants/responseMessages");
var sendResponse_1 = require("./sendResponse");
var httpStatusCode_1 = require("./httpStatusCode");
/**
 * @function handleCustomError
 *
 * This function is a response sending wrapper for custom error handling
 * Instead of writing extra repetitive lines
 * use this wrapper
 *
 * @param {object} res the response object
 *
 * @returns {object} error the error object
 */
var handleCustomError = function (res, error) {
    if (error.code === httpStatusCode_1.HttpStatusCode.NotFound) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === httpStatusCode_1.HttpStatusCode.Unauthorized) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === httpStatusCode_1.HttpStatusCode.Forbidden) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === httpStatusCode_1.HttpStatusCode.NotFound) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === httpStatusCode_1.HttpStatusCode.Conflict) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === httpStatusCode_1.HttpStatusCode.UnprocessableEntity) {
        return (0, sendResponse_1.sendResponse)(res, error.code, {}, error.message);
    }
    return (0, sendResponse_1.sendResponse)(res, httpStatusCode_1.HttpStatusCode.InternalServerError, error, responseMessages_1.reponseMessages.genericError);
};
exports.handleCustomError = handleCustomError;
/**
 * @function extractErrors
 *
 * This function is a extract error from errors array
 *
 * @param {Array} errors the errors array of object
 *
 * @returns {Array} errorMessages returns validation error messages
 */
var extractErrors = function (errors) {
    return errors.array({ onlyFirstError: true }).map(function (err) {
        var _a;
        return (_a = {}, _a[err.param] = err.msg, _a);
    });
};
exports.extractErrors = extractErrors;
