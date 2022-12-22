"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractErrors = exports.handleCustomError = void 0;
var response_messages_1 = require("../constants/response-messages");
var send_response_1 = require("./send-response");
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
    if (error.code === 400) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === 401) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === 403) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === 404) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === 409) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    if (error.code === 422) {
        return (0, send_response_1.sendResponse)(res, error.code, {}, error.message);
    }
    return (0, send_response_1.sendResponse)(res, 500, error, response_messages_1.reponseMessages.genericError);
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
